// Brücke zu HTML
const produkt = document.getElementById('inputProdukt');
const preis = document.getElementById('inputPreis');
const button = document.getElementById('btn');
const liste = document.getElementById('einkaufsListe');

// Reaktion auf Button Klick
button.addEventListener('click', () => {

    // Geben text und preis einen Wert zu
    const text = produkt.value;
    const number = preis.value;

    // Cheack ob Input leer ist
    if (text === '' || number === '') {
        alert("Produkt und Preis bitte ausfüllen!");
        return;
    };

    let istDoppelt = false;

    for (const vorhandenesLi of liste.children) {
        if (vorhandenesLi.textContent.startsWith(text)) {
            istDoppelt = true;
        };
    };

    if (istDoppelt === true) {
        alert("Bereits vorhanden!");
        return;
    };

    // Eine neue li und btn erstellen
    const neueLi = document.createElement('li');
    const loeschBtn = document.createElement('button');
    const inEinkaufswagen = document.createElement('button');

    loeschBtn.innerText = 'X';
    inEinkaufswagen.innerHTML = 'Im Wagen';

    loeschBtn.addEventListener('click', () => {
        neueLi.remove();
    });

    inEinkaufswagen.addEventListener('click', () => {
        neueLi.style.textDecoration = 'line-through';
    });

    // Der neuen li text und preis hinzufügen
    neueLi.innerText = text + ' ' + number + '€' + ' ';
    neueLi.dataset.preis = number;

    // Und es als Kind anhängen
    liste.appendChild(neueLi);
    neueLi.appendChild(loeschBtn);
    neueLi.appendChild(inEinkaufswagen);

    let total = 0;

    for (const li of liste.children) {

        total += Number(li.dataset.preis);

        if (total > 50) {
            alert("Du bist über dein Budget!");
        };
    };

    produkt.value = '';

    preis.value = '';

});

