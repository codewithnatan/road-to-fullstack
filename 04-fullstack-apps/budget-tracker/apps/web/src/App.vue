<script setup lang="ts">
import { ref } from 'vue'

// Wir sagen Typescrpt, wie ein Eintrag auszusehen hat
interface Transaction {
  id: number
  text: string
  amount: number
}

// Unsere Liste startet mit drei Test-Einträgen
const transactions = ref<Transaction []>([
  {id: 1, text: 'Gehalt', amount: 2500.00},
  {id: 2, text: 'Einkauf Rewe', amount: -52.40},
  {id: 3, text: 'Fitnessstudio', amount: -29.90}
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
<!-- Der Hauptrahmen: Teilt den Bildschirm in zwei Spalten (Sidebar + Inhalt) -->
 <div class="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-slate-50 font-sans text-slate-800">

  <!-- Links: Die Sidebar (Dunkelblau/Slate-900) -->
   <aside class="bg-slate-900 text-white p-6 hidden md:flex flex-col justify-between">
    <div>
      <!-- Logo / App Name -->
       <div class="flex items-center space-x-3 mb-8">
        <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-lg text-white">
          $
        </div>
        <span class="text-lg font-bold tracking-wide">CentWise</span>
       </div>

       <!-- Navigation Links -->
        <nav class="space-y-1">
          <a href="#" class="flex items-center px-4 py-3 bg-blue-600 rounded-xl text-sm font-semibold transition-colors">Dashboard</a>
          <a href="#" class="flex items-center px-4 py-3 bg-blue-400 hover:bg-slate-800 hover:text-white rounded-xl text-sm font-medium transition-colors">Transaktion</a>
          <a href="#" class="flex items-center px-4 py-3 bg-blue-400 hover:bg-slate-400 hover:text-white rounded-xl text-sm font-meediium transition-colors">Analysen</a>
        </nav>
    </div>

    <!-- User Info unten in der Sidebar -->
     <div class="border-t border-slate-800 pt-4 flex items-ceenter justify-center text-sm font-bold">
      <div class="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">
      CH
     </div>
     <div>
      <p class="text-sm font-semibold leading-none">Chef-Entwickler</p>
      <span class="text-xs ttext-slate-500">Premium-Konto</span>
     </div>
     </div>
   </aside>
   
   <!-- Rechts: Der Hauptbereich (Hellgrau) -->
    <main class="p-6 md:p-10 max-w-5xl w-full mx-auto space-y-8">

      <!-- Header Zeile -->
       <header class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold md:text-3xl text-salte-900">Finanzübersicht</h1>
          <p class="text-sm text-slate-500">Wilkommen zurück! Hier sind deine Finanzen im Blick.</p>
        </div>
       </header>

       <!-- Grid für Inputs und Liste nebeneinander auf großen Bildschirmen -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <!-- Fläche 1: Die Eingabe-Karte (Nimmt eine Spalte) -->
          <div class="bg-white p-6 border border-slate-200/80 rounded-2xl shadow-sm space-y-4">
            <h3 class="text-base font-bold text-slate-900">Neue Buchung</h3>

            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Zweck / Name</label>
                <input v-model="newText" type="text" placeholder="z.B Netflix" class="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <div>
                <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Betrag (€)</label>
                <input v-model.number="newAmount" type="number" placeholder="-12.99" class="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <button @click="addTransaction" class="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/10">Buchen</button>
            </div>
          </div>

          <!-- Fläche 2: Die Listen-Karte (Nimmt zwei Spalten auf großen Bildschirmen) -->
           <div class="lg:col-span-2 bg-white p-6 border border-slate-200/80 rounded-2xl shadow-sm space-y-4">
            <h3 class="text-base font-bold text-slate-900">Letzte Aktivitäten</h3>

            <div class="divide-y divide-slate-100">
              <!-- Einzelne Zeile in der Liste -->
               <div v-for="item in transactions" :key="item.id" class="flex justify-between items-center py-3.5 first:pt-0 lasr:pb-0">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 rounded-full" :class="item.amount > 0 ? 'bg-emerald-500' : 'bg-rose-500'"></div>
                  <span class="text-sm font-medium text-slate-700">{{ item.text }}</span>
                  </div>
                  <span class="text-sm font-bold" :class="item.amount > 0 ? 'text-emerald-600' : 'text-rose-600'">
                    {{ item.amount > 0 ? '+' : '' }}{{ item.amount.toFixed(2) }}
                  </span>
               </div>
            </div>
           </div>
        </div>
    </main>
 </div>
</template>
