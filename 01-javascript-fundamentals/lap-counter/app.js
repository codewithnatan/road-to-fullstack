// Brücke zu HTML
const btnNaechsterunde = document.getElementById('btn-runde');
const btnSpeichern = document.getElementById('btn-speichern');
const btnZuruecksetzen = document.getElementById('btn-zurueck');
const rundenListe = document.getElementById('rundenListe');
const rundenAnzeige = document.getElementById('rundenAnzeige');


let rundenZahl = 0;

// Hören auf Button Klick
btnNaechsterunde.addEventListener('click', () => {

    // Hier 0 um 1 erweitern
    rundenZahl = rundenZahl + 1;
    // Das Ergeebnis als Text an die HTML ID geben
    rundenAnzeige.innerText = rundenZahl;

});


btnSpeichern.addEventListener('click', () => {

    // Eine neues Listenelemetn erstellen
    let neueLi = document.createElement('li');

    // Dem neuen Listenelement das Ergebnis zuweisen
    neueLi.innerText = rundenZahl;

    // Und an das neue Element dranhängen
    rundenListe.appendChild(neueLi);

});


btnZuruecksetzen.addEventListener('click', () => {

    rundenZahl = 0;

    // RundenAnzeige auf 0 settzen
    rundenAnzeige.innerText = rundenZahl;

    // Und Li leeren
    rundenListe.innerText = '';

});