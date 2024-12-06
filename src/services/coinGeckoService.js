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
