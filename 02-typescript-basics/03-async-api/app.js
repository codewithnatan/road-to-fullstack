// Die asynchrone Funktion
// Das ': Promise<void>' sichert den asynchronen Ausgang ab
async function ladeKryptoKurs() {
    console.log("[API]: Hole Live-Daten von CoinGecko...");
    // Krypto-Test-API
    // fetch wartet blockierungsfrei auf die HTTP-Antwort
    const response = await fetch("https://coingecko.com");
    // Wir sagen TypeScript, dass hier ein Array von CoinData ankoommt
    const daten = await response.json();
    // Da es ein Array ist, schnappen wir uns den ersten Eintrag (Bitcoin)
    const bitcoin = daten[0];
    console.log(`[Ergebnis]: ${bitcoin.name} steeht aktueel bei ${bitcoin.curren_price}€`);
}
// Funktion ausführen
ladeKryptoKurs();
export {};
