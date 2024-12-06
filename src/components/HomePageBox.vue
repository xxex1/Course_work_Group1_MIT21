<template>
  <div class="center-container">
    <div class="text-section">
      <h1 class="title">
        Digital finance made <br />
        <span class="highlight">simple</span> for everyone.
      </h1>
      <div class="search-container">
      <div class="search-bar">
        <span class="search-icon">
          <img src="../assets/search_icon.svg" alt="Search Icon" />
        </span>
        <input
          type="text"
          placeholder="Пошук..."
          class="search-input"
          v-model="searchQuery"
        />
        <button class="search-button" @click="handleSearch">Шукати</button>
      </div>
    </div>
    </div>
    <div class="image">
      <img src="../assets/coins1.svg" alt="Crypto Coins" />
    </div>
  </div>
  <transition name="fade">
  <div class="overlay-container" v-if="tableData.length > 0" >
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Value</th>
          <th>Change</th>
          <th>Trading Volume</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>${{ item.value }}</td>
            <td :class="{ positive: item.change >= 0, negative: item.change < 0 }">
              {{ item.change }}%
            </td>
            <td>${{ item.trading_volume }}</td>
          </tr>
        </tbody>
    </table>
  </div>
</transition>
</template>

<script setup>
import { ref } from "vue";
import { fetchCryptoData, fetchCryptoListByLetter, fetchCryptoDetails } from "../services/coinGeckoService";

// Хранилища данных и строки поиска
const tableData = ref([]);
const searchQuery = ref("");
// Функция для обработки поиска
const handleSearch = async () => {
  const query = searchQuery.value.trim().toLowerCase(); // Приводим строку к нижнему регистру и обрезаем пробелы

  if (!query) {
    // Если поле ввода пустое, очищаем таблицу
    tableData.value = [];
    return;
  }

  try {
    if (query.length >= 1) {
      // Если введена строка (одна или несколько букв), ищем криптовалюты по этой строке
      const cryptoList = await fetchCryptoListByLetter(query);

      if (cryptoList.length === 0) {
        alert("Криптовалюты с этой строкой не найдены.");
        return;
      }

      // Получаем подробную информацию для первых 10 найденных криптовалют
      const cryptoIds = cryptoList.slice(0, 10).map((crypto) => crypto.id);
      const detailedCryptoData = await fetchCryptoDetails(cryptoIds);

      // Сортируем криптовалюты по цене (по убыванию)
      tableData.value = detailedCryptoData.sort((a, b) => b.value - a.value);
    } else {
      // Если введено полное название, ищем одну криптовалюту
      const isDuplicate = tableData.value.some(
        (item) => item.name.toLowerCase() === query
      );

      if (isDuplicate) {
        alert("Эта криптовалюта уже добавлена в таблицу.");
        return;
      }

      // Получаем данные криптовалюты и добавляем её в таблицу
      const crypto = await fetchCryptoData(query);
      tableData.value = [...tableData.value, crypto];

      // Сортируем криптовалюты по цене (по убыванию)
      tableData.value.sort((a, b) => b.value - a.value);
    }
  } catch (error) {
    console.error("Ошибка при поиске криптовалюты:", error);
    alert("Не удалось найти указанную криптовалюту или список.");
  }
};


</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
.title {
  font-size: 5rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 20px;
  margin-top: 100px;
}
.highlight {
  color: #e9c71d;
}
.result {
  display: flex;
  justify-content: space-between;
  background-color: #333;
}
.search-container {
  justify-content: left;
  align-items: center;
  margin-top: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #666;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 1rem;
  outline: none;
}

.search-input::placeholder {
  color: #aaa;
  font-style: italic;
}

.search-button {
  padding: 20px 20px;
  background-color: #e9c71d;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #d1a61d;
}
.text-section {
  margin-left: 129px;
}
.image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.overlay-container {
  display: flex;
  margin: 100px;
  position: absolute;
  top: 450px;
  right: 0;
  left: 0;
  background-color: rgba(71, 70, 70, 0.197); /* Полупрозрачный фон */
  color: white;
  padding: 10px;
  overflow: auto; /* Скроллинг, если контент превышает высоту */
  max-height: 50vh; /* Ограничение максимальной высоты */
  transform: translateY(10px); /* Небольшой сдвиг вниз */
}

/* Анимация появления */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
/* Таблица */
.table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #444; /* Границы ячеек */
}

.table th {
  background-color: #555; /* Фон для заголовков таблицы */
}

.table tbody tr:nth-child(odd) {
  background-color: #333; /* Чередование строк таблицы */
}

.table tbody tr:nth-child(even) {
  background-color: #444;
}
/* Сообщение, если данных нет */
</style>
