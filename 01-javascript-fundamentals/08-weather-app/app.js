// DOM-Referenzen (Zuständig für Input/Output-Verknüpfung)
const stadtEingabe = document.getElementById('stadt-eingabe');
const suchenBtn = document.getElementById('suchen-btn');
const tempAnzeige = document.getElementById('temp-anzeige');
const stadtAnzeige = document.getElementById('stadt-anzeige');

// Event-Driven Logik (Asynchroner Datenfluss)
suchenBtn.addEventListener('click', async () => {

    // Trigger für den API-Fetch
    let eingabeStadt = stadtEingabe.value;

    // HTTP-Anfrage an die REST-API senden
    const antwort = await fetch(`https://wttr.in/${eingabeStadt}?format=j1`);

    // Parsen des HTTP-Response-Bodys
    const daten = await antwort.json();

    // Extraktion der Zielmetrik
    let echtteGradzahl = daten.current_condition[0].temp_C;

    // UI-Update
    tempAnzeige.innerText = echtteGradzahl + ' C';
    stadtAnzeige.innerText = eingabeStadt;

});