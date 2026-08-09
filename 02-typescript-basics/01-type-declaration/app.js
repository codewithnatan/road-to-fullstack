"use strict";
// ===========================================
// Typen-Deklaraion: Explizite Typisierung von Primitiven (Logik-Zustand)
// ===========================================
// Deklaration einer strikten Text-Variable für die Fehlervermeidung
let krypto = "Bittcoin";
// Deklaration einer strikten Ganzzahl-Variable für mathematische Operationen
let aktuellerKurs = 58000;
// 2. Das Objekt, das sich streng an den Bauplan halen muss
let bitcoin = {
    name: "Bitcoin",
    priceEuro: 58000,
    rank: 1
};
// Das neue Objekt ohne rank
let dogcoin = {
    name: "dogcoin",
    priceEuro: 0.12
};
console.log(`Coin: ${bitcoin.name}, Preis: ${bitcoin.priceEuro}`);
// Wir definieren ein Array, das nur aus CryptoCoins bestehen darf
let cryptoWallet = [
    {
        name: "Bitcoin",
        priceEuro: 58000,
        rank: 1
    },
    {
        name: "Dogecoin",
        priceEuro: 0.12
        // rank fehlt (erlaubt, da optional via ?)
    },
    {
        name: "Ethereum",
        priceEuro: "dreitausend"
    }
];
// So list man später Daten aus de Liste aus
cryptoWallet.forEach(coin => {
    console.log(`Wallet-Check: ${coin.name} steht bei ${coin.priceEuro}€`);
});
