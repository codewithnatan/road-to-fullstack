// Der Input (preis) muss eine number sein
function berechneSteuer(preis) {
    const steuer = preis * 0.19;
    return steuer; // Die Funktion muss eine Zahl zurückgeben
}
// Diese Funktion gibt nichts zurück (Ausgang ist void)
function zeigeErgebnis(text) {
    console.log(`[System-Info]: ${text}`);
    // Hier gibt es kein return
}
// Der korrekte Aufruf
let steuerFuerBitcoin = berechneSteuer(58000);
zeigeErgebnis(`Die Seuer für Bitcoin beträg: ${steuerFuerBitcoin}€`);
export {};
