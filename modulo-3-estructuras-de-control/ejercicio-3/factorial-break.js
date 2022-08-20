// Factorial - break

let factorial = 1;
let contador = 1;
let valor = 10;

while (true) {
    factorial *= contador;
    if (contador === valor) {
        break;
    }
    contador++;
}

console.log(`El factorial de ${valor} es ${factorial}`);