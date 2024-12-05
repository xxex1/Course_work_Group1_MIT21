<template>
  <!-- Main Content -->
  <main class="main">
    <div class="search-container">
      <div class="search-bar">
        <span class="search-icon">
          <img src="../assets/search_icon.svg" alt="Search Icon" />
        </span>
        <input type="text" placeholder="Пошук..." class="search-input" />
        <button class="search-button">Шукати</button>
      </div>
      <div class="result">
        <h1>RESULT</h1>
        <div class="crypto-table">
          <table>
            <thead>
              <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Зміна (%)</th>
                <th>Обсяг</th>
                <th>Графік</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="crypto in cryptos" :key="crypto.name">
                <td class="crypto-name">{{ crypto.name }}</td>
                <td class="crypto-price">{{ crypto.price }}</td>
                <td
                  :class="[
                    'crypto-percentage',
                    crypto.change > 0 ? 'positive' : 'negative'
                  ]"
                >
                  {{ crypto.change }}%
                </td>
                <td class="crypto-volume">{{ crypto.volume }}</td>
                <td class="crypto-chart">
                  <img :src="crypto.chart" alt="Price Chart" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";

// Дані криптовалют
const cryptos = reactive([
  {
    name: "Bitcoin (BTC)",
    price: "$102,000",
    change: 117.5,
    volume: "Volume: $1B",
    chart: "../assets/bitcoin_chart.svg",
  },
  {
    name: "Ethereum (ETH)",
    price: "$5,800",
    change: 33.2,
    volume: "Volume: $900M",
    chart: "../assets/ethereum_chart.svg",
  },
  {
    name: "Solana (SOL)",
    price: "$25",
    change: -0.8,
    volume: "Volume: $500M",
    chart: "../assets/solana_chart.svg",
  },
]);
</script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #808080;
  color: #f5f5f5;
}

/* Main Section */
.main {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

.search-container {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
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
  background-color: #ffd700;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #e5c100;
}

.result {
  text-align: center;
  color: #e5c100;
  font-size: 25px;
  margin-top: 20px;
}

/* Crypto Table Styles */
.crypto-table {
  margin: 0 auto; /* Центрування таблиці */
  padding: 20px; /* Внутрішній відступ */
  background-color: #2f2f2f; /* Фон таблиці */
  border-radius: 10px; /* Закруглення кутів */
  max-width: 95%; /* Максимальна ширина в процентах (майже на весь екран) */
  width: 1200px; /* Фіксована ширина для великих екранів */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Тінь для покращеного вигляду */
  overflow: hidden; /* Відсікання зайвого контенту */
}

table {
  width: 100%; /* Таблиця займатиме всю ширину контейнера */
  border-collapse: collapse; /* Забирає подвійні межі між клітинками */
}

th, td {
  padding: 15px; /* Збільшений відступ */
  text-align: center; /* Вирівнювання тексту */
  font-size: 16px; /* Розмір шрифту */
  border-bottom: 1px solid #444; /* Розділювальна лінія */
}

th {
  background-color: #444; /* Темний фон для заголовків */
  color: #ffd700; /* Жовтий текст для заголовків */
  font-weight: bold;
}

td {
  color: #f5f5f5; /* Основний колір тексту */
}

.crypto-name {
  text-align: left;
}

.crypto-price {
  color: #ffd700;
}

.crypto-percentage.positive {
  color: green;
}

.crypto-percentage.negative {
  color: red;
}

.crypto-chart img {
  width: 50px;
  height: 30px;
  object-fit: contain;
}
</style>
