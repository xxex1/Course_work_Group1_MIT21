<template>
  <div class="container">
    <div class="container-block">
        <div class="container-block-left">
            <h1 class="block-title">1crypt</h1>
            
              <input type="text" placeholder="Пошук..." class="block-left-search" />
            
        </div>
        <div class="imgane">
            <img src="../assets/PriceConverter.svg" alt="Crypto Coins">
        </div>
    </div>
    <div class="container-block">
        <div class="container-block-right">
            <h1 class="block-title">2crypts</h1>
            <div class="container-block-right-cryptolist">
              
              <ul class="crypto-list">
    <li class="crypto-item">
      <div class="crypto-cell crypto-name">Bitcoin (BTC)</div>
      <div class="crypto-cell crypto-price">$57,000</div>
      <div class="crypto-cell crypto-percentage positive">+3.5%</div>
      <div class="crypto-cell crypto-volume">Volume: $1.2B</div>
      <div class="crypto-cell crypto-chart">
       
        <img src="" alt="Price Chart">
      </div>
    </li>
    <li class="crypto-item">
      <div class="crypto-cell crypto-name">Ethereum (ETH)</div>
      <div class="crypto-cell crypto-price">$3,800</div>
      <div class="crypto-cell crypto-percentage negative">-1.2%</div>
      <div class="crypto-cell crypto-volume">Volume: $900M</div>
      <div class="crypto-cell crypto-chart">
        <img src="" alt="Price Chart">
      </div>
    </li>
    
  </ul>
            </div>
        </div>
    </div>
  </div>
  </template>
  
  <script setup>
    const imageSrc = "../assets/PriceConverter.svg";
  </script>
  
  <style scoped>
    .container {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
    .block-title {
      color:#454545CC ;
      line-height: 52px;
      font-size: 40px;
      

      
    }
    .block-left-search {
      width: 351px;
      height: 60px;
      background-color:#D9D9D9E5 ;
      border-radius: 10px;
      flex: 1;
      padding-left: 10px;
      border: none;
      
    }
    .block-left-search:focus {
      outline: none;  
      border: none;  
    }

    .container-block-right-cryptolist {
      width: 616px;
      height: 549px;
      background-color:#D9D9D9E5 ;
      border-radius: 10px;
    }


    .imgane {
      width: 546px;
      height: 610px;
    }

    
.block-left {
  width: 100%; 
  background-color: #D9D9D9E5;
  border-radius: 10px;
  padding: 15px;
  overflow-x: auto; 
}


.crypto-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px; 
}


.crypto-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


.crypto-cell {
  flex: 1; 
  text-align: center; 
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid #ddd; 
}


.crypto-cell:last-child {
  border-right: none;
}


.crypto-name {
  font-weight: bold;
  text-align: left; 
}

.crypto-price {
  color: #333;
}

.crypto-percentage.positive {
  color: green;
}

.crypto-percentage.negative {
  color: red;
}

.crypto-volume {
  color: #555;
  font-size: 13px;
}


.crypto-chart img {
  width: 50px;
  height: 30px;
  object-fit: contain;
}


  </style>