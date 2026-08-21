<script setup lang="ts">
// Wir holen das Vue-Werkzeug für Reaktivittät
import { ref } from  'vue'

// Logik: Wir starten mit 100 Euro Kontostand
const balance = ref<number>(100)

// Diese Funktion zieht uns gleich Geld ab
function spendMoney() {
  balance.value = balance.value - 10 // Wir ziehen 10 Euro ab
}
</script>

<template>
  <!-- Output -->
  <div class="p-6">
    <!-- Wir zeigen den aktuuellen Kontostand an -->
     <h1 class="text-2xl font-bold text-salte-800">Kontostand: {{ balance }} €</h1>

     <!-- Input: Ein Button, der bei @click die Funktion aufruft -->
      <button
      @click="spendMoney" class="mt-4 px-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
      >
      10 € Ausgaben
    </button>
  </div>
</template>
