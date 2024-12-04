<template>
  <div class="center-container">
    
    <img src="../assets/coins1.svg">
  </div>
</template>

<script setup>
const imageSrc = '../assets/coins1.svg'; // Путь к вашему изображению
</script>

<style scoped>
.center-container {
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
