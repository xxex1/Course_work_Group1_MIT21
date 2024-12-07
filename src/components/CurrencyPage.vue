<template>
  <div id="app">
    <header>
      <h1>Currency info</h1>
    </header>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Пошук криптовалюти..."
        @input="fetchCryptoList"
        @focus="isDropdownVisible = true"
        @blur="hideDropdown"
      />
      <button @click="fetchSelectedCrypto">Пошук</button>
      <ul
        v-if="cryptoList.length && isDropdownVisible"
        class="dropdown-list"
      >
        <li
          v-for="crypto in cryptoList"
          :key="crypto.id"
          @mousedown.prevent="selectCrypto(crypto)"
          class="dropdown-item"
        >
          {{ crypto.name }}
        </li>
      </ul>
    </div>
    <div v-if="searchedCryptos.length" class="crypto-table">
      <h2 class="crypto-table-title">Інформація про криптовалюти</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Change for 24h</th>
            <th>Value</th>
            <th>Market capitalization</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="crypto in searchedCryptos" :key="crypto.name">
            <td>{{ crypto.name }}</td>
            <td>${{ crypto.value }}</td>
            <td :class="{ positive: crypto.change > 0, negative: crypto.change < 0 }">
              {{ crypto.change }}%
            </td>
            <td>${{ crypto.trading_volume }}</td>
            <td>${{ crypto.market_cap }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

const apiKey = "CG-k2sD4DuMSnEC4Hy698oN6rdv";
const baseURL = "https://api.coingecko.com/api/v3";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": apiKey,
  },
});

const fetchCryptoData = async (cryptoName) => {
  try {
    const response = await apiClient.get("/simple/price", {
      params: {
        ids: cryptoName,
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
        include_24hr_vol: true,
      },
    });

    return {
      name: cryptoName,
      value: response.data[cryptoName]?.usd || "N/A",
      change: response.data[cryptoName]?.usd_24h_change?.toFixed(2) || "N/A",
      trading_volume: response.data[cryptoName]?.usd_24h_vol?.toLocaleString() || "N/A",
      market_cap: response.data[cryptoName]?.usd_market_cap?.toLocaleString() || "N/A",
    };
  } catch (error) {
    console.error("Помилка завантаження даних:", error);
    throw error;
  }
};

const fetchCryptoListByLetter = async (query) => {
  try {
    const response = await apiClient.get("/coins/list");
    return response.data.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error("Помилка завантаження списку криптовалют:", error);
    throw error;
  }
};

export default {
  data() {
    return {
      searchQuery: "",
      cryptoList: [],
      searchedCryptos: [], // Список для збереження історії
      error: null,
      isDropdownVisible: false,
    };
  },
  methods: {
    async fetchCryptoList() {
      if (!this.searchQuery) {
        this.cryptoList = [];
        return;
      }

      try {
        const cryptos = await fetchCryptoListByLetter(this.searchQuery);
        this.cryptoList = cryptos.slice(0, 10);
      } catch (error) {
        console.error("Помилка при отриманні списку криптовалют:", error);
      }
    },
    async fetchSelectedCrypto() {
      if (!this.searchQuery) return;

      try {
        const data = await fetchCryptoData(this.searchQuery.toLowerCase());
        // Додаємо нову криптовалюту в історію на початок списку, якщо її ще немає
        if (!this.searchedCryptos.some((crypto) => crypto.name === data.name)) {
          this.searchedCryptos.unshift(data); // Додаємо новий запис на початок
        }
        this.error = null;
      } catch (error) {
        this.error = "Не вдалося отримати дані про криптовалюту.";
      }
    },
    async selectCrypto(crypto) {
      this.searchQuery = crypto.id;
      this.cryptoList = [];
      await this.fetchSelectedCrypto();
    },
    hideDropdown() {
      setTimeout(() => (this.isDropdownVisible = false), 100); // Затримка, щоб уникнути закриття при виборі елемента.
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 20px;
  color: #ffc107; /* Жовтий для заголовка */
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  background-color: #333; /* Темный фон поисковой панели */
  padding: 10px;
  border-radius: 8px;
  width: 400px; /* Устанавливаем фиксированную ширину */
  margin: 0 auto; /* Центрируем панель */
}


.search-bar input {
  width: 300px;
  padding: 10px;
  border: 2px solid #ffc107; /* Жовта обводка */
  border-radius: 5px 0 0 5px;
  outline: none;
  font-size: 16px;
  color: #fff; /* Білий текст */
  background-color: #555; /* Темний фон поля вводу */
}

.search-bar button {
  padding: 10px 20px;
  background-color: #ffc107; /* Жовта кнопка */
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;
  color: #333; /* Темний текст на кнопці */
}

.search-bar button:hover {
  background-color: #d1a61d;
}
.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #333; /* Темний фон випадаючого списку */
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
}

.dropdown-list li {
  padding: 8px;
  cursor: pointer;
  color: #fff; /* Білий текст в списку */
}

.dropdown-list li:hover {
  background-color: #444; /* Легке затемнення при наведенні */
}

.crypto-table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #333; /* Темний фон таблиці */
  color: #fff; /* Білий текст в таблиці */
  border-radius: 10px;
}

.crypto-table-title {
  text-align: center;
  color: #ffc107; /* Жовтий колір для заголовка */
  margin-bottom: 10px;
}

.crypto-table table {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
}

.crypto-table th,
.crypto-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #333;
}

.crypto-table th {
  background-color: #ffc107; /* Жовтий для заголовків */
  color: #333; /* Темний текст для заголовків */
}

.crypto-table td {
  background-color: #444; /* Темний фон для клітинок */
}
</style>
