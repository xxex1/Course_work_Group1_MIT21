import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CryptoCurrencyView from '../views/CryptoCurrencyView.vue';
import PriceConverterView from '../views/PriceConverterView.vue';
import FAQView from '../views/FAQView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // Головна
      name: 'home',
      component: HomeView,
    },
    {
      path: '/crypto-currency', // Курси криптовалют
      name: 'crypto-currency',
      component: CryptoCurrencyView,
    },
    {
      path: '/price-converter', // Конвертер цін
      name: 'price-converter',
      component: PriceConverterView,
    },
    {
      path: '/faq', // Сторінка FAQ
      name: 'faq',
      component: FAQView,
    },
  ],
});

export default router;
