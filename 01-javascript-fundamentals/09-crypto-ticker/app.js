// DOM-Referenzen (Zuständig für Input/Output-Verknüpfung)
const cryptoInput = document.getElementById('crypto-input');
const tickerBtn = document.getElementById('ticker-btn');
const cryptoAnzeige = document.getElementById('crypto-anzeige');
const waehrungAnzeige = document.getElementById('waehrung-anzeige');

//Event-Driven Logik (Asynchroner Datenfluss)
tickerBtn.addEventListener('click', async () => {

    // Trigger für den API-Fetch
    const eingabeCrypto = cryptoInput.value;

    // HTTP-Anfrage an die REST-API senden
    const antwort = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${eingabeCrypto.toLowerCase()}&vs_currencies=eur`);

    // Parsen des HTTP-Response-Bodys
    const daten = await antwort.json();

    // Extraktion der Zielmetrik
    const echteWaehrung = daten[eingabeCrypto.toLowerCase()].eur;

    // UI-Update
    eingabeCrypto.innerText = daten;
    waehrungAnzeige.innerText = echteWaehrung + ' €';

});