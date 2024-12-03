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
        <li><a href="#">Home</a></li>
        <li><a href="#">Crypto currency</a></li>
        <li><a href="#">Price Converter</a></li>
        <li><a href="#">FAQ</a></li>
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
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);
}

li {
  background-color: #E9C71D;
  padding: 16px 28px;
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
