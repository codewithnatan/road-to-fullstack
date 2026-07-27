/**
 * Meilenstein 03: Bedingungen und Logische Abläufe
 * Konzept: Prüfe ob ein Talent für die Talent-Pool-App vermittelbar ist.
 */

const talentStatus = {
    name: "Anna",
    istVerfuegbar: true,
    berufserfahrungJahre: 3,
};

// 1. Wenn 'talentStatus.istVerfuegbar' wahr (true) ist und 'talentStatus.berufserfahrungJahre' gößer oder gleich 2 ist: -> Gib per console.log ein Template Literal aus: "Anna ist bereit für die Vermittlung!"

if (talentStatus.istVerfuegbar && talentStatus.berufserfahrungJahre >= 2) {
    console.log(`${talentStatus.name} ist bereit für die Vermittlung!`)

    // 2. Ansonsten (else):
    // -> Gib aus: "Anna erfühlt die Kriterien aktuell nicht."
} else {
    console.log(`${talentStatus.name} erfühlt die Kriterien aktuell nicht.`)
};