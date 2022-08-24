// Formas de importar y exportar modulos
// 1. CommonJS - require
// 2. ES6 - import

// console.log(module)

// const moduloMatematicas = require("./modulos/matematicas.js")
// console.log(moduloMatematicas.suma)

// const factorial = moduloMatematicas.factorial
// const suma = moduloMatematicas.suma

// const {factorial, suma} = moduloMatematicas

const {factorial, suma} = require("./modulos/matematicas.js")

const fac = factorial(5)
console.log(fac)

const sum = suma(12, 90)
console.log(sum)
