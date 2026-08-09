// ===========================================
// Typen-Deklaraion: Explizite Typisierung von Primitiven (Logik-Zustand)
// ===========================================

// Deklaration einer strikten Text-Variable für die Fehlervermeidung
let krypto: string = "Bittcoin";

// Deklaration einer strikten Ganzzahl-Variable für mathematische Operationen
let aktuellerKurs: number = 58000;

// 1. Der Bauplan (Das Interface)
interface CryptoCoin {
    name: string;
    priceEuro: number;
    rank?: number;
}

// 2. Das Objekt, das sich streng an den Bauplan halen muss
let bitcoin: CryptoCoin = {
    name: "Bitcoin",
    priceEuro: 58000,
    rank: 1
};

// Das neue Objekt ohne rank
let dogcoin: CryptoCoin = {
    name: "dogcoin",
    priceEuro: 0.12
};

console.log(`Coin: ${bitcoin.name}, Preis: ${bitcoin.priceEuro}`);

// Wir definieren ein Array, das nur aus CryptoCoins bestehen darf
let cryptoWallet: CryptoCoin[] = [
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
        priceEuro: 3000
    }
];

// So list man später Daten aus de Liste aus
cryptoWallet.forEach(coin => {
    console.log(`Wallet-Check: ${coin.name} steht bei ${coin.priceEuro}€`);
});