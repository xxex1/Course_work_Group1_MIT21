<template>
        <!-- Main Content -->
      <main class="main">
        <div class="search-container">
          <div class="search-bar">
            <span class="search-icon">
              <img src="../assets/search_icon.svg" alt="Search Icon" />
            </span>
            <input type="text" placeholder="Пошук..." class="search-input" />
            <button class="search-button">Шукати</button>
          </div>
          <div class="result">
            <h1>RESULT</h1>
            <div class="result-box">Немає результатів.</div>
          </div>
        </div>
      </main>
  </template>
  
  <script setup>
  const imageSrc = "../assets/coins1.svg";
  </script>
  
  <style scoped>
  /* General Styles */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #808080;
    color: #f5f5f5;
  }
  
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #2f2f2f;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .brand {
    font-size: 24px;
    font-weight: bold;
    color: #f5f5f5;
  }
  
  .highlight {
    color: #ffd700;
  }
  
  /* Navigation */
  .nav {
    display: flex;
    gap: 15px;
  }
  
  .nav-item {
    text-decoration: none;
    color: #ffd700;
    font-weight: bold;
    padding: 5px 10px;
    border: 2px solid #ffd700;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .nav-item:hover {
    background-color: #ffd700;
    color: #2f2f2f;
  }
  
  /* Main Section */
  .main {
    display: flex;
    justify-content: space-between;
     height: 100vh;
  }
  
  .search-container {
    position: absolute; /* Абсолютне позиціонування */
    top: 150px; /* Відстань від верхнього краю сторінки */
    left: 50%; /* Центрування по горизонталі */
    transform: translateX(-50%); /* Вирівнювання по центру */
    width: 80%; /* Ширина контейнера пошуку */
    max-width: 800px; /* Максимальна ширина для великих екранів */
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
    background-color: #ffd700;
    color: black;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #e5c100;
  }
  
  .result {
    text-align: center;
    color: #e5c100;
    font-size: 25px;
  }
  
  .result-box {
    margin: 0 auto;
    padding: 30px; /* Збільшено внутрішні відступи */
    background-color: #2f2f2f;
    border-radius: 10px;
    max-width: 800px; /* Збільшено максимальну ширину */
    width: 90%; /* Додано для адаптивності: контейнер займатиме до 90% ширини екрану */
    color: #f5f5f5;
  }
    
    </style>
  