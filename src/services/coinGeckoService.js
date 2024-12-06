import axios from "axios";

const apiKey = "CG-k2sD4DuMSnEC4Hy698oN6rdv"; // Ваш API-ключ
const baseURL = "https://api.coingecko.com/api/v3";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": apiKey,
  },
});

// Функция для получения данных о криптовалюте
export const fetchCryptoData = async (cryptoName) => {
  try {
    const response = await apiClient.get("/simple/price", {
      params: {
        ids: cryptoName, // Название криптовалюты из строки поиска
        vs_currencies: "usd", // Валюта
        include_market_cap: true,
        include_24hr_change: true,
        include_24hr_vol: true,
      },
    });

    // Преобразуем данные в формат, подходящий для таблицы
    return {
      name: cryptoName,
      value: response.data[cryptoName].usd,
      change: response.data[cryptoName].usd_24h_change.toFixed(2),
      trading_volume: response.data[cryptoName].usd_24h_vol.toLocaleString(),
    };
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    throw error;
  }
};

export const fetchCryptoListByLetter = async (query) => {
  try {
    const response = await apiClient.get("/coins/list");

    // Фильтруем криптовалюты по введённой строке
    return response.data.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error("Ошибка при загрузке списка криптовалют:", error);
    throw error;
  }
};


// services/coinGeckoService.js

// Функція для отримання даних з API
export const fetchCryptoRates = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching crypto rates:", error);
    return null;
  }
};
