// Factorial - while

let factorial = 1;
let contador = 1;
let valor = 10;

while (contador <= valor) {
    factorial *= contador;
    contador++;
}

console.log(`El factorial de ${valor} es ${factorial}`);