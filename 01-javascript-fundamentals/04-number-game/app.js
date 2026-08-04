// DOM-Elemente für Eingabe,Button und Anzeige referenzieren
const numberInput = document.getElementById('inputNumber');
const btnRaten = document.getElementById('btn-raten');
const btnNeuesSpiel = document.getElementById('btn-neuesSpiel');
const antwort = document.getElementById('antwort');
const versucheAnzeige = document.getElementById('versuche');

// Spieler-Konfiguration initialisieren
let geheimzahl = Math.floor(Math.random() * 100) + 1;
let versuche = 3;

// Event-Handling: Tip abgeben
btnRaten.addEventListener('click', () => {
    let tipp = Number(numberInput.value);

    versuche--;

    versucheAnzeige.innerText = versuche;

    // Zustand prüfen: Spiel beeenden und Eingabe sperren bei Ressourcen-Limit (0 Versuche)
    if (versuche === 0) {

        btnRaten.disabled = true;
        antwort.innerText = 'Game Over! Die Zahl war: ' + geheimzahl;
        return;
    }

    // Benutzer-Tipp mit Geheimzahl abgleichen, um dynamisches Richtungs-Feedback zu geben
    if (geheimzahl === tipp) {
        antwort.innerHTML = 'Getroffen';
    } else if (geheimzahl > tipp) {
        antwort.innerText = 'Zu niedrig!';
    } else if (geheimzahl < tipp) {
        antwort.innerHTML = 'Zu hoch!';
    }
});

// Event-Handling: Spiel zurücksetzen
btnNeuesSpiel.addEventListener('click', () => {
    // Reset durch Seiten-Refresh
    location.reload();
});