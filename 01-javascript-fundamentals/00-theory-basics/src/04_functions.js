/**
 * Meilenstein 04: Funktionen und Moderne Sytax
 * Konzept: Eine wiederverwendbare Funktion bauen, die Talente formatiert ausgibt.
 */

// 1. Die Funktion soll zwei Parameter entgegennehmen: 'name' und 'skill'.
const zeigeTalentInfo = (name, skill) => {
    return (`Talent: ${name} | Spezialisierung: ${skill}`)
};

// 2. Sie soll ein Template Literal per 'return' zurückgeben, das so aussieht:
// "Talent: [Name] | Spezialisierung: [skill]"


const infoText = zeigeTalentInfo("Sarah", "Vue.js");
console.log(infoText);