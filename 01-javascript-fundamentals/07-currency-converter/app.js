// DOM-Elemente für Eingabe, Button und Anzeige referenzieren
const euroInput = document.getElementById('euroInput');
const btnDollar = document.getElementById('btnDollar');
const btnPfund = document.getElementById('btnPfund');
const anzeigeErgebnis = document.getElementById('anzeigeErgebnis');

// Universelle Rechenmaschine: Ermittelt den Zielbetrag basierend auf dem flexiblen Wechselkurs
function rechneUm(wechselkurs) {
    let euro = Number(euroInput.value);

    let ergebnis = euro * wechselkurs;

    anzeigeErgebnis.innerText = ergebnis;
}

// Event-Handling: Doller-Wechselkurs in den Berechnungs-Tunnel einspeisen
btnDollar.addEventListener('click', () => {
    rechneUm(1.10);
});

// Event-Handling: Pfund-Wechselkurs in den Berechnungs-Tunnel einspeisen
btnPfund.addEventListener('click', () => {
    rechneUm(0.85);
});