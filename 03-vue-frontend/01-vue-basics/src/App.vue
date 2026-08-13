<script setup lang="ts">
// Hier kommt die TypeScript-Logik rein
// 1. Wir holen das reaktive Werkzeug aus dem Vue-Kern
import { ref } from 'vue';

// Interface (Der Bauplan)
interface CryptoCoin {
  id: string;
  name: string;
  priceEuro: number;
}

// Ein reaktives Array, das auf unser Interface hört
// Wir sagen Vue: Diese Liste darf nur Objekte vom Typ 'CryptoCoin' enthalten
let cryptoWallet = ref<CryptoCoin[]>([
  {id: "btc", name: "Bitcoin", priceEuro: 58000},
  {id: "eth", name: "Ethereum", priceEuro: 3100},
  {id: "doge", name: "Dogecoin", priceEuro: 0.12}
]);
</script>

<template>
  <div>
    <h1>Mein Krypto-Wallet (List-Rendering)</h1>
    <p>Diese Liste wird live aus einem TypeScript-Array generiert:</p>

    <ul>
      <!-- v-for schleife durch das Array. :key ist wichtig für Vue -->
       <li v-for="coin in cryptoWallet" :key="coin.id" class="coin-item"><strong>{{ coin.name }}</strong>: {{ coin.priceEuro }} €
       </li>
    </ul>
  </div>
</template>

<style>
/* Hier kommt das Design rein */
h1 {
  color: #42b883; /* Das Vue Grün */
}
ul {
  list-style: none;
  padding: 0;
  width: 300px;
}
p {
  font-size: 18px;
  margin-top: 15px;
}
.coin-item {
  background-color: #35495e;
  color: white;
  margin: 10px 0;
  padding: 12px;
  border-radius: 5px;
  font-size: 18px;
 display: flex;
 justify-content: space-between;
}
</style>