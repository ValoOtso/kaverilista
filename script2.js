const kaveriLista2 = [];

function lisaa() {
    let x = document.getElementById("kaveri").value;
    kaveriLista2.push(x);
    document.getElementById('lista2').innerHTML = kaveriLista2.join('<br>' + '<br>');
}

function poista() {
    let y = document.getElementById("kaveri").value;
    const index = kaveriLista2.indexOf(y);
    if (index > -1) {
        kaveriLista2.splice(index, 1);
    }
    document.getElementById('lista2').innerHTML = kaveriLista2.join('<br>' + '<br>');
}

function jarjesta() {
    kaveriLista2.sort();
    document.getElementById('lista2').innerHTML = kaveriLista2.join('<br>' + '<br>');
}