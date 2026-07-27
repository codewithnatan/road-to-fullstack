/**
 * Meilenstein 02: Datentypen und Komplexe Strukturen
 * Speichern von Talent-Daten in Objekten und Arrays.
*/

// 1. Aufgabe: Erstelle ein konstantes Objekt namens 'Talent'.
// Es soll die Eigenschaften 'name' (Sting), 'skill' (String) und 'istVerfuegbar' (Boolean) haben.
const talent = {

    name: "Tom",
    // 2. Aufgabe: Erstelle ein Array namens 'skillliste' mit drei diner skills.
    skillliste: ["HTML", "CSS", "JavaScript"], istVerfuegbar: true,

};

// 3. Aufgabe: Nutze console.log um ein Template Literal, um das Talent und seine Skills im Terminal anzuzeigen.
console.log(`Das Talent ${talent.name} behärscht: ${talent.skillliste.join(", ")}`);