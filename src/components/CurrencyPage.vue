<template>
  <div id="app">
    <header>
      <h1>Crypto Trade</h1>
    </header>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Пошук криптовалюти..."
        @input="fetchCryptoList"
      />
      <button @click="fetchSelectedCrypto">Пошук</button>
      <ul v-if="cryptoList.length" class="dropdown-list">
        <li v-for="crypto in cryptoList" :key="crypto.id" @click="selectCrypto(crypto)">
          {{ crypto.name }}
        </li>
      </ul>
    </div>
    <div v-if="selectedCrypto && selectedCrypto.name" class="crypto-table">
      <h2>Інформація про валюту</h2>
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна (USD)</th>
            <th>Зміна за 24г</th>
            <th>Обсяг торгів</th>
            <th>Ринкова капіталізація</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedCrypto.name }}</td>
            <td>${{ selectedCrypto.value }}</td>
            <td>{{ selectedCrypto.change }}%</td>
            <td>${{ selectedCrypto.trading_volume }}</td>
            <td>${{ selectedCrypto.market_cap }}</td>
          </tr>
        </tbody>
      </table>
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
      selectedCrypto: null,
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
        this.selectedCrypto = data;
      } catch (error) {
        console.error("Не вдалося отримати дані про криптовалюту:", error);
      }
    },
    async selectCrypto(crypto) {
      this.searchQuery = crypto.id;
      this.cryptoList = [];
      await this.fetchSelectedCrypto();
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.search-bar input {
  width: 300px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-size: 16px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #ffc107;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
}

.dropdown-list li {
  padding: 8px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}

.crypto-table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.crypto-table table {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #fff;
}

.crypto-table th, .crypto-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #333;
}

.crypto-table th {
  background-color: #ffc107;
  color: #333;
}
</style>
