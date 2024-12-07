<template>
  <div class="container">
    <div class="container-block">
      <div class="container-block-left">
        <h1 class="block-title">TOKENS</h1>
        <input
          type="text"
          placeholder="Введіть кількість токенів..."
          class="block-left-search"
          ref="searchInput"
        />
        <button class="search-button" @click="updateConversion">Search</button> 
      </div>
      <div class="imgane">
        <img src="../assets/PriceConverter.svg" alt="Crypto Coins" />
      </div>
    </div>
    <div class="container-block">
      <div class="container-block-right">
        <h1 class="block-title">Converted</h1>
        <div class="container-block-right-cryptolist">
          <ul class="crypto-list" ref="cryptoList"></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { fetchCryptoRates } from "@/services/coinGeckoService"; // Імпортуємо функцію з сервісу

export default {
  setup() {
    const searchInput = ref(null);
    const cryptoList = ref(null);

    // Оновлення конвертованих значень
    const updateConversion = async () => {
      const inputAmount = parseFloat(searchInput.value.value) || 0; // Отримуємо введене значення, з підтримкою дробових чисел
      if (isNaN(inputAmount) || inputAmount <= 0) {
        // Перевірка на валідність числа
        cryptoList.value.innerHTML = "Please enter a valid number.";
        return;
      }

      const cryptoRates = await fetchCryptoRates();

      if (!cryptoRates) {
        return;
      }

      // Очищаємо список
      cryptoList.value.innerHTML = "";

      // Генеруємо елементи для кожної криптовалюти
      Object.keys(cryptoRates).forEach((cryptoName) => {
        const rate = cryptoRates[cryptoName].usd;
        const convertedValue = (inputAmount * rate).toFixed(2); // Підтримка дробових значень

        const cryptoItem = document.createElement("li");
        cryptoItem.className = "crypto-item";
        cryptoItem.innerHTML = ` 
          <div class="crypto-cell crypto-name">${cryptoName.toUpperCase()}</div>
          <div class="crypto-cell crypto-price">$${rate}</div>
          <div class="crypto-cell crypto-converted">Converted: $${convertedValue}</div>
        `;

        cryptoList.value.appendChild(cryptoItem);
      });
    };

    // Додаємо обробник подій для введення тексту (тепер тільки для кнопки)
    onMounted(() => {
      // Викликаємо конвертацію при першому завантаженні, якщо необхідно
      // updateConversion(); 
    });

    return {
      searchInput,
      cryptoList,
      updateConversion,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.block-title {
  color: #454545cc;
  line-height: 52px;
  font-size: 40px;
}
.block-left-search {
  width: 351px;
  height: 60px;
  background-color: #d9d9d9e5;
  border-radius: 10px 0px 0px 10px;
  flex: 1;
  padding-left: 10px;
  border: none;
}
.block-left-search:focus {
  outline: none;
}

.search-button {
  
  padding: 10px 20px;
  background-color: #E9C71D;
  color: white;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  height: 62px;
  color: black;
  
}

.search-button:hover {
  background-color: #c0a315;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);
}

.container-block-right-cryptolist {
  width: 616px;
  height: 549px;
  background-color: #d9d9d9e5;
  border-radius: 10px;
  overflow-y: auto;
}
.crypto-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.crypto-cell {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid #ddd;
}
.crypto-cell:last-child {
  border-right: none;
}
.crypto-name {
  font-weight: bold;
  text-align: left;
}
.crypto-price {
  color: #333;
}
.crypto-converted {
  font-weight: bold;
  color: #555;
}
.crypto-item {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
