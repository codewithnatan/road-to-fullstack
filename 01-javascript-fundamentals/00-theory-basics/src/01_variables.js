/**
 * Meilenstein 01: Variablen und Konstanten
 * Konzept: Sichere Datenhaltung mit modernem ES6+ Standard.
 */

// Konstanten für werte, die sich niemals ändern dürfen (Schutz for Überschreiben)
const pojektName = "talentPoolApp";
const framework = "vue.js 3";

// Dynamische Variablen für Werte, die sich im Laufe der Anwendung verändern können
let registrierteTalente = 12;
let istAppBereit = true;

// Ausgabe im Terminal mit modernen Template Literals
console.log(`Projekt: ${pojektName} wird mit ${framework} gebaut.`);
console.log(`Aktuelle Talente im Pool: ${registrierteTalente}.`);

// Demonstration einer Änderung im Programmablauf
registrierteTalente = 13;
console.log(`Update - Neue Talente im System ${registrierteTalente}`);