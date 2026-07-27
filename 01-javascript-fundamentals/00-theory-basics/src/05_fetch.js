/**
 * Meilenstein 05: Asynchrones Laden (Fetch-API)
 * Konzept: Daten von einer API abrufen - genau so holen wir die Talente aus WordPress.
 */

const ladeTalentDaten = () => {
    // 1. Nutze 'fetch' um die URL aufzurufen
    fetch("https://typicode.com")
        // 2. Verwandle die Antwort in echtes JSON
        .then((antwort) => antwort.json())
        // 3. Nutze die Daten
        // 'daten' enthält jetzt ein Objekt. Gib per console.log und Template Literal folgendes aus:
        // "API-Verbindung steht! Gefundenes Talent: [daten.name]"
        .then((daten) => {
            console.log(`API-Verbindung steht! Gefundenes Talent: ${daten.name}`)
        })
};

ladeTalentDaten();