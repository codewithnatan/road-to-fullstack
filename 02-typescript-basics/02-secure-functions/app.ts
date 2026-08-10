export { }; // Das Geddächnis für diesen Ordner nullen

// Der Input (preis) muss eine number sein
function berechneSteuer(preis: number): number {
    const steuer = preis * 0.19;

    return steuer; // Die Funktion muss eine Zahl zurückgeben
}

// Diese Funktion gibt nichts zurück (Ausgang ist void)
function zeigeErgebnis(text: string): void {
    console.log(`[System-Info]: ${text}`);
    // Hier gibt es kein return
}

// Der korrekte Aufruf
let steuerFuerBitcoin: number = berechneSteuer(58000);
zeigeErgebnis(`Die Seuer für Bitcoin beträg: ${steuerFuerBitcoin}€`);