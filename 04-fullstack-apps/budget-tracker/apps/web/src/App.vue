<script setup lang="ts">
import { ref } from 'vue'

// 1. Typ-Definition: Wir sagn TypeScript, wie ein Eintrag auszusehen hat
interface Transaction {
  id: number
  text: string
  amount: number
}

// 2. Logik: Eine Liste (Array) voller Test-Daten
const transactions = ref<Transaction []>([
  {id: 1, text: 'Einkauf Rewe', amount: -45.50},
  {id: 2, text: 'Gehalt', amount: 2500.00},
  {id: 3, text: 'Fitnessstudio', amount: -29.90},
  {id: 4, text: 'Netflix', amount: -12.99}
])
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
    <h1 class="text-2xl font-bold text-slate-800 mb-6">Schritt 4: Die Liste</h1>

    <!-- Output: Wir loopen durch die Liste -->
     <div class="space-y-3">
      <span class="text-xs text-slate-400 block mb-1">Deine Transaktionen:</span>

      <!-- v-for ist unsere Schleife. :key ist extrem wichtig für Vue (Eindeutigkeit) -->
       <div
       v-for="item in transactions"
       :key="item.id"
       class="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm"
       >
       <!-- Links: Der Text der Buchung  -->
        <span class="font-medium text-slate-700">{{ item.text }}</span>

        <!-- Rechts: Der Betrag (Grün wenn positiv, Rot wenn negativ) -->
         <span
         class="font-bold"
         :class="item.amount > 0 ? 'text-emerald-600' : 'text-rose-600'"
         >
         {{ item.amount > 0 ? '+' : '' }}{{ item.amount }} €
        </span>
      </div>
     </div>
  </div>
</template>
