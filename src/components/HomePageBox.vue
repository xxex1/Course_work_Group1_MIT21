<template>
  <div class="center-container">
    <div class="text-section">
      <h1 class="title">
        Digital finance made <br />
        <span class="highlight">simple</span> for everyone.
      </h1>
      <div class="search-container">
        <div class="search-bar">
          <span class="search-icon"
            ><img src="../assets/search_icon.svg" alt="Search Icon"
          /></span>
          <input type="text" placeholder="Пошук..." class="search-input" />
          <button class="search-button">Шукати</button>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="../assets/coins1.svg" alt="Crypto Coins" />
    </div>
  </div>
  <div class="overlay-result">
    <p class="overlay-text">This is an overlay container!</p>
  </div>
</template>

<script setup>
const imageSrc = "../assets/coins1.svg";
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
.title {
  font-size: 5rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 20px;
  margin-top: 100px;
}
.highlight {
  color: #e9c71d;
}
.result {
  display: flex;
  justify-content: space-between;
  background-color: #333;
}
.search-container {
  justify-content: left;
  align-items: center;
  margin-top: 20px;
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
  background-color: #e9c71d;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #d1a61d;
}
.text-section {
  margin-left: 129px;
}
.image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.overlay-result {
  position: absolute; /* Абсолютное позиционирование */
  bottom: 0; /* Расположение внизу */
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Полупрозрачный фон */
  color: white;
  padding: 20px;
  text-align: center;
  z-index: 10; /* Высокий уровень слоя для перекрытия */
}

.overlay-text {
  font-size: 1.5rem;
  margin: 0;
}
</style>
