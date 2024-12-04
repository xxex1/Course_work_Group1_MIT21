<template>
  <div class="center-container">
    <div>
      <h1 class="title">
        Digital finance made simple for everyone
      </h1>
    </div>
    <div class="image">
      <img src="../assets/coins1.svg">
    </div>
  </div>
</template>

<script setup>
const imageSrc = '../assets/coins1.svg'; // Путь к вашему изображению
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: space-between; /* Пространство между заголовком и картинкой */
  align-items: center; /* Выравнивание по вертикали */
  height: 100vh; /* Высота экрана */
}
.title {
  flex: 1;
  font-size: 2.5rem; /* Размер заголовка */
  color: #333; /* Цвет текста */
}
.image {
  display: flex;
  justify-content: right; /* Горизонтальное центрирование */
  align-items: center; /* Вертикальное центрирование */
  height: 100vh;
}
img {
  max-width: 100%;
  max-height: 100%;
}

</style>
