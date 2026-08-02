// DOM-Elemente für Eingabe, Button und Anzeige referenzieren
const inputBetrag = document.getElementById('inputBetrag');
const btnHinzufuegen = document.getElementById('btnHinzufuegen');
const anzeigeGesamt = document.getElementById('anzeigeGesamt');

// Datenstruktur zur dauerhaften Verwaltung aller Geldbeträge im Hintergrund
let betraege = [];

let total = 0;

// Event-Handling: Neuen Betrag registrieren und Summe neu berechnen
btnHinzufuegen.addEventListener('click', () => {
    let neuerBetrag = Number(inputBetrag.value);

    betraege.push(neuerBetrag);

    console.log(betraege)

    total = 0;

    // Konstand neu aufsummieren, um Rechenfehler durch doppelte Werte zu vermeiden
    for (let einzelneBetraege of betraege) {

        total = total + einzelneBetraege;
    }

    anzeigeGesamt.innerText = 'Gesamtsumme: ' + total;

    inputBetrag.value = '';
});




