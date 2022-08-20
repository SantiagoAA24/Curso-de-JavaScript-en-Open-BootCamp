// break - continue (mala practica)

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    var j = 5; // afecta a todo el código
    let k = 10; // solo afecta a este bloque de código
    if (lista[i] > 5) {
        break;
    }
    if (lista[i] === 3) {
        continue;
    }
    console.log(lista[i]);
}

// Ambito de un bucle

// console.log(i);
// console.log(j);
// console.log(k);