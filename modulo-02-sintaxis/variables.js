var variable;
let variableLet;
// const constante;

const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4; // var puede cambiar su valor
console.log(a);

console.log(constante);
// constante = "Adios"; // Error: const no puede cambiar su valor

let b = 3;
console.log(b);

b = 5; // let puede cambiar
console.log(b);

// var afecta a todo el codigo
var var_a = "A";
if (true) {
    var var_a = "B";
}
console.log(var_a);

// let afecta solo al bloque donde se defina
let let_a = "A";
if (true) {
    let let_a = "B";
}
console.log(let_a);

console.log(typeof(a));
console.log(typeof(var_a));