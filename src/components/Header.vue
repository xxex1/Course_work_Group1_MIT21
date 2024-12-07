<template>
  <header>
    <div class="logo-container">
      <img src="../assets/logoCryptoTrade.svg">
      <h1>
        <span class="first-half">Crypto</span>
        <span class="second-half">Trade</span>
      </h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/crypto-currency">Crypto currency</router-link></li>
        <li><router-link to="/price-converter">Price Converter</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}

nav {
  display: flex;
  justify-content: end;
}

ul {
  display: inline-flex;
  overflow: hidden;
  padding: 0px;
  list-style-type: none;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);
}

li {
  background-color: #E9C71D;
  padding: 16px 28px;
}

li:hover {
  background-color: #d1a61d;
}
a {
  text-decoration: none;
  color: black;
}

.logo-container {
  display: flex;
  align-items: center;
}
.first-half {
  color: #454545
}
.second-half {
  color: #E9C71D
}
</style>
