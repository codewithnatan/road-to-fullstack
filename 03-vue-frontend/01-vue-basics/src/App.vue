<script setup lang="ts">
// Hier kommt die TypeScript-Logik rein
// 1. Wir holen das reaktive Werkzeug aus dem Vue-Kern
import { ref } from 'vue';

// 2. Wir erstellen eine reaktive Variable (Startwert: 0)
// TypeScript erkennt automatisch: Das ist eine 'number'
let count = ref(0);

// 3. Eine Funktion, die den Zähler hochzählt
function erhoeheZaehler(): void {
  count.value++; // Wichtig: Im TypeScript-Bereich müssen wir immer über '.value' an den Wert ran
}
</script>

<template>
  <div>
    <h1>Road to Fullstack: Vue + TypeScript</h1>

    <!-- Hier zeigen wir den reaktiven Wert live an -->
    <p>Aktueller Klick-Stand: {{ count }}</p>

    <!-- Ein Button, der bei einem Klick (@click) unsere Funktion ausführt -->
     <button @click="erhoeheZaehler">Klick mich</button>
  </div>
</template>

<style>
/* Hier kommt das Design rein */
h1 {
  color: #42b883; /* Das Vue Grün */
}
button {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #35495e;
}
</style>