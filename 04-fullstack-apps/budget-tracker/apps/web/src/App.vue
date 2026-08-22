<script setup lang="ts">
// Wir holen das Vue-Werkzeug für Reaktivittät
import { ref } from  'vue'

// Logik: Eine leere reaktive Variable für den Text
const textInput = ref<string>("")
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
     <h1 class="text-2xl font-bold text-salte-800 mb-6">Schritt 3: Das Eingabefeld</h1>

     <!-- Input: Das Textfeld, verbunden über v-model -->
     <div class="mb-4">
      <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Beschreibung eingeben</label>
      <input 
      v-model="textInput"
      type="text"
      placeholder="z.B. Gehalt oder Einkauf"
      class="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-800 transition-all"
      />
     </div>
     <!-- Output: Hier spiegeln wir den Text live wider -->
      <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 mt-6">
        <span class="text-xs text-slate-400 block mb-1">Live-Vorschau der Logik:</span>
        <!-- Wenn textInput leer ist, zeigen wir einen Standardtext an (Kurzform für if/else) -->
         <p class="font-medium text-slate-700">
          {{ textInput || 'Du tippst gerade nichts...' }}
         </p>
      </div>
  </div>
</template>
