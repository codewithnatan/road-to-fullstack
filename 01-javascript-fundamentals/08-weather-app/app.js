// DOM-Elemente für Eingabe, Button und Anzeige referenzieren
const stadtEingabe = document.getElementById('stadt-eingabe');
const suchenBtn = document.getElementById('suchen-btn');
const tempAnzeige = document.getElementById('temp-anzeige');
const stadtAnzeige = document.getElementById('stadt-anzeige');

// Temperatur festlegen
let aktuelleTemperatur = 25;

// Event-Handling: Stadt eingeben
suchenBtn.addEventListener('click', () => {

    let eingabeStadt = stadtEingabe.value;

    stadtAnzeige.innerText = eingabeStadt;

    tempAnzeige.innerText = aktuelleTemperatur + " C"
});