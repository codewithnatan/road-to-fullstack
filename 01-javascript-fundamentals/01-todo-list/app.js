// Die Brücke zum HTML
const meinBtn = document.getElementById('btn');
const meinInput = document.getElementById('eingabefeld');
const meineListe = document.getElementById('toDoListe');
const loeschGnzeListeBtn = document.getElementById('btnLoeschen');
const zaehler = document.getElementById('aufgabenZahl');

// Funktion die das Zählen der Aufgaben übernimmt
function zaehlerMaschine() {
    const zaehler = document.getElementById('aufgabenZahl');
    zaehler.innerHTML = meineListe.children.length;
};

// Arrow Funktion für den Button
meinBtn.addEventListener('click', () => {
    // Hier bekommt die Konstande text den Wert vom Imput
    const text = meinInput.value;
    // Hier gucken wir ob das Input-Feld leer ist
    if (text === '') {
        alert("Eingabefeld ist leer!");
        // Hier ist unser Stoppschiild
        return;
    }

    // Der Dopplungsschutz
    // Ein Variabl, die sich merkt, ob wir ein Duplikat gefunden haben
    let istDoppelt = false;

    // Mit der for ... of loop gehen wir jeden einzeelnen Listenpunkt in unserer Liste durch
    for (const vorhandenesLi of meineListe.children) {
        // Wenn der Text eexakt übereeinstimmt
        if (vorhandenesLi.textContent.startsWith(text)) {
            istDoppelt = true; // Teffer! Duplikat geefunden.
        };
    };

    // Das Sttoppschild
    // Wenn istDoppelt wahr (true) ist, brechen wir sofort ab!
    if (istDoppelt === true) {
        alert("Diese Aufgabe existiert bereits!");
        return;
    };

    // Hier erstellen wir eine neue li
    const neuesLi = document.createElement('li');

    const loeschBtn = document.createElement('button');

    //const anzahl = meineListe.children.length;
    loeschBtn.innerText = 'X';

    loeschBtn.addEventListener('click', () => {
        neuesLi.remove();

        zaehlerMaschine();
    });

    loeschGnzeListeBtn.addEventListener('click', () => {
        meineListe.innerText = '';

        zaehlerMaschine();
    });

    // Hier fügen wir der neuen li den Text vom Input-Feld
    neuesLi.innerText = text;
    // Hier hengen wir das neue li-Element als Kind in unsere HTML-Liste ein>
    neuesLi.appendChild(loeschBtn);
    meineListe.appendChild(neuesLi);
    zaehlerMaschine();
    // Hier wird das Input-Feld gelöscht
    meinInput.value = '';

});