import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CryptoCurrencyView from '../views/CryptoCurrencyView.vue';
import PriceConverterView from '../views/PriceConverterView.vue';
import FAQView from '../views/FAQView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // Главная страница
      name: 'home',
      component: HomeView,
    },
    {
      path: '/crypto-currency', // Страница о криптовалютах
      name: 'crypto-currency',
      component: CryptoCurrencyView,
    },
    {
      path: '/price-converter', // Конвертер цен
      name: 'price-converter',
      component: PriceConverterView,
    },
    {
      path: '/faq', // Страница FAQ
      name: 'faq',
      component: FAQView,
    },
  ],
});

export default router;
