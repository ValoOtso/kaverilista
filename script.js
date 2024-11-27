const kaveriLista = [];

function myFunction() {
    let i = 0;
    let j = 1;
    while (i < 10){
        let x = prompt("Lisää kaveri:");
        kaveriLista[i] = j + '. ' + x;
        i++;
        j++;
        if (i == 10)
            document.getElementById('lista').innerHTML = kaveriLista.join('<br>' + '<br>');
    }
}

