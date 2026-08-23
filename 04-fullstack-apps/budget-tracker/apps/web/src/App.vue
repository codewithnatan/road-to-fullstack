<script setup lang="ts">
import { ref } from 'vue'

// Wir sagen Typescrpt, wie ein Eintrag auszusehen hat
interface Transaction {
  id: number
  text: string
  amount: number
}

// Unsere Liste startet mit zwei Test-Einträgen
const transactions = ref<Transaction []>([
  {id: 1, text: 'Gehalt', amount: 2500.00},
  {id: 2, text: 'Einkauf', amount: -50.00}
])

// Zwei Variablen, die mit den Eingabefeldern verkabelt werden
const newText = ref<string>('')
const newAmount = ref<number | null>(null)

// Die Logik: Hier passiert die Action
const addTransaction = () => {
  // Sicherheits-Check: Wenn Text leer oder Betrag null ist, mach nichts
  if (!newText.value || newAmount.value === null) return

  // Wir bauen ein neues Objekt nach den Regeln des Interfaces
  const newItems: Transaction = {
    id: Date.now(), // Erzeugt eine einzigartige ID über die aktuelle Zeit
    text: newText.value,
    amount: newAmount.value
  }

  // Wir schieben das neue Objekt in unsere reaktive Liste
  transactions.value.push(newItems)

  // Eingabefelder wieder sauber auswischen
  newText.value = ''
  newAmount.value = null
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto space-y-6">
    <h1 class="text-2xl font-bold text-slate-800 mb-6">Schritt 5: Das Zusammenspiel</h1>

   <!-- Input -->
    <div class="bg-white p-4 border border-slate-200 rounded-xl space-y-3 shadow-sm">
      <div>
        <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Name</label>
        <input v-model="newText" type="text" placeholder="z.B. Netflix" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ">
      </div>

      <div>
        <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Betrag (Minus für Ausgaben)</label>
        <input v-model.number="newAmount" type="number" placeholder="z.B. -12.99" class="w-full px-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <!-- Bei Klick wird unsere Logik-Funktion gefeuert -->
       <button @click="addTransaction" class="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Hinzufügen</button>
    </div>

    <!-- Output Liste -->
     <div class="space-y-2">
      <div v-for="item in transactions" :key="item.id" class="flex justify-between items-center p-3 bg-white border boorder-slate-200 rounded-lg">
        <span class="text-sm font-medium text-slate-700">{{ item.text }}</span>
        <span class="text-sm font-bold" :class="item.amount > 0 ? 'text-emerald-600' : 'text-rose-600'">{{ item.amount > 0 ? '+' : '' }}{{ item.amount }}</span>
      </div>
     </div>

  </div>
</template>
