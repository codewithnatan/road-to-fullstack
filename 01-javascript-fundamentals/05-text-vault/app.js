// Brücke zu HTML
const meinInput = document.getElementById('mein-input');
const btnSafe = document.getElementById('btn-safe');
const meineUl = document.getElementById('meine-ul');

// Eine Datenbank für Notizen initilisiert
let tresor = [];

// Um die Notiz aus dem Input zu bekommen
btnSafe.addEventListener('click', () => {
    let meineNotiz = meinInput.value;
    tresor.push(meineNotiz);
    meineUl.innerText = '';

    // Durchsuchung der Datenbank "tresor"
    for (let notiz of tresor) {
        let li = document.createElement('li');
        li.innerText = notiz;
        meineUl.appendChild(li);
    }

});

