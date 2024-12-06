<template>
  <div class="faq-page">
    <div class="head">
      <h1>FAQ</h1>
    </div>

    <div class="faq-container">
      <details>
        <summary>Where can I find the cryptocurrency exchange rate on the website?</summary>
        <p>
          To find the cryptocurrency exchange rate:
          <ul>
            <li>Open the website and ensure the cryptocurrency table is displayed.</li>
            <li>Use the search bar to enter the full name, part of the name, or a single letter of the cryptocurrency.</li>
            <li>The table will update to show relevant data, such as Name, Value, Change, and Trading Volume.</li>
            <li>The exchange rate is displayed in the "Value" column.</li>
          </ul>
        </p>
      </details>

      <details>
        <summary>Where on the website can you find the currency conversion function?</summary>
        <p>
          The currency conversion function:
          <ul>
            <li>It is integrated into the search bar of the cryptocurrency table.</li>
            <li>Search for a cryptocurrency by name, abbreviation, or symbol to see its exchange rate in the "Value" column.</li>
            <li>Use the displayed rate to calculate conversions.</li>
          </ul>
        </p>
      </details>
      <details>
        <summary>What is cryptocurrency and how does it work?</summary>
        <p>
          Cryptocurrency is a digital currency secured by cryptography. It operates on decentralized networks using blockchain technology. Key features include:
          <ul>
            <li><strong>Decentralization:</strong> No single authority controls it.</li>
            <li><strong>Blockchain:</strong> A public ledger records all transactions.</li>
            <li><strong>Security:</strong> Uses cryptography and private/public keys for transactions.</li>
            <li><strong>Peer-to-Peer:</strong> Enables direct transactions without intermediaries.</li>
          </ul>
        </p>
      </details>
      <details>
        <summary>How can I contact customer support?</summary>
        <p>
          This website was created as part of a course project and does not have an official customer support service. However, here is some information about the team behind its development:
          <ul>
            <li><strong>Team Leader:</strong> Dmytro Shcherban, responsible for managing the project and coordinating the team.</li>
            <li><strong>Designers:</strong> Dariia Hulchak, Maksym Berdyk, and Anastasiia Slastnikova, who worked on the website's visual design and user interface.</li>
            <li><strong>Frontend Developers:</strong> Viacheslav Bohdan and Serhii Skab, who implemented the website's functionality and layout.</li>
          </ul>
        </p>
      </details>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Общий фон */
.faq-page {
  width: 100%; /* Растянуто на всю ширину */
  height: 100%; /* Растянуто на всю высоту */
  padding: 20px 0;
}

/* Заголовок */
.head {
  text-align: center;
  margin-bottom: 20px;
}

.head h1 {
  font-size: 3rem;
  color: #333; /* Тёмный текст */
  font-weight: bold;
}

/* FAQ контейнер */
.faq-container {
  max-width: 1200px; /* Ограничение ширины для содержимого */
  margin: 0 auto; /* Центрирование */
  padding: 20px;
  background-color: #f5f5f5; /* Серо-белый фон */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

details {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc; /* Лёгкая граница */
  background-color: #eaeaea; /* Светло-серый фон для деталей */
}

details summary {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
}

details summary:hover {
  color: #e9c71d; /* Жёлтый цвет при наведении */
}

details p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
}

details ul {
  list-style: disc;
  padding-left: 20px;
  color: #444;
}

details li {
  margin-bottom: 8px;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .head h1 {
    font-size: 2.5rem;
  }

  details summary {
    font-size: 1rem;
  }
}
</style>
