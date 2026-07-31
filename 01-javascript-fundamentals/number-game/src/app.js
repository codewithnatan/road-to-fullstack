// Brücke zu HTML
const numberInput = document.getElementById('inputNumber');
const btnRaten = document.getElementById('btn-raten');
const btnNeuesSpiel = document.getElementById('btn-neuesSpiel');
const antwort = document.getElementById('antwort');
const versucheAnzeige = document.getElementById('versuche');

// Spieler-Konfiguration initialisieren
let geheimzahl = Math.floor(Math.random() * 100) + 1;
let versuche = 3;

// Event_handling: Tip abgeben
btnRaten.addEventListener('click', () => {
    let tipp = Number(numberInput.value);

    versuche--;

    versucheAnzeige.innerText = versuche;

    // Spielabbruch bei verbrauchten versuchen
    if (versuche === 0) {
        alert('Game Over!')
    }

    // Gewinn und Logikprüfung
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