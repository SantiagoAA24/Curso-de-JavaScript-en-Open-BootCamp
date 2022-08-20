// Factorial - for

let factorial = 1;
let valor = 10;

for (let i = 1; i <= valor; i++) {
    factorial *= i;
}

console.log(`El factorial de ${valor} es ${factorial}`);