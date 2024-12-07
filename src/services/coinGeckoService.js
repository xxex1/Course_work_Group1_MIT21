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

// Получение подробной информации о криптовалютах по их ID
export const fetchCryptoDetails = async (cryptoIds) => {
  try {
    const response = await apiClient.get("/simple/price", {
      params: {
        ids: cryptoIds.join(","), // Преобразуем массив ID в строку через запятую
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
        include_24hr_vol: true,
      },
    });

    // Преобразуем данные в формат для таблицы
    return Object.keys(response.data).map((id) => ({
      name: id,
      value: response.data[id].usd,
      change: response.data[id].usd_24h_change?.toFixed(2) || "N/A",
      trading_volume:
        response.data[id].usd_24h_vol?.toLocaleString() || "N/A",
    }));
  } catch (error) {
    console.error("Ошибка при загрузке данных о криптовалютах:", error);
    throw error;
  }
};


// services/coinGeckoService.js

// Функція для отримання даних з API
export const fetchCryptoRates = async () => {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,binancecoin,xrp,dogecoin,solana,cardano,polkadot,chainlink,shiba-inu,avalanche-2&vs_currencies=usd';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data; // Повертаємо отримані дані
  } catch (error) {
    console.error('Error fetching crypto rates:', error);
    throw error; // Пробросити помилку для обробки в компоненті
  }
};

