<template>
  <div class="container">
    <div class="container-block">
      <div class="container-block-left">
        <h1 class="block-title">1crypt</h1>
        <input type="text" placeholder="Введіть суму в USD..." class="block-left-search" ref="searchInput" />
      </div>
      <div class="imgane">
        <img src="../assets/PriceConverter.svg" alt="Crypto Coins" />
      </div>
    </div>
    <div class="container-block">
      <div class="container-block-right">
        <h1 class="block-title">2crypts</h1>
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
      const inputAmount = parseFloat(searchInput.value.value) || 0; // Отримуємо введене значення
      const cryptoRates = await fetchCryptoRates();

      if (!cryptoRates) {
        return;
      }

      // Очищаємо список
      cryptoList.value.innerHTML = "";

      // Генеруємо елементи для кожної криптовалюти
      Object.keys(cryptoRates).forEach((cryptoName) => {
        const rate = cryptoRates[cryptoName].usd;
        const convertedValue = (inputAmount * rate).toFixed(2);

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

    // Додаємо обробник подій для введення тексту
    onMounted(() => {
      if (searchInput.value) {
        searchInput.value.addEventListener("input", updateConversion);
        updateConversion(); // Викликати при першому завантаженні
      }
    });

    return {
      searchInput,
      cryptoList,
      updateConversion,
    };
  },
};
</script>

<style >
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
  border-radius: 10px;
  flex: 1;
  padding-left: 10px;
  border: none;
}
.block-left-search:focus {
  outline: none;
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
.crypto-item{
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}



</style>
