// Funciones tipo flecha - Funciones Anónimas

const array = [1, 5, 6, 2, 8]
console.log(array)

const array2 = array.map(num => num * 2) // Función Anónima - no está asignada a ninguna variable
console.log(array2)

const dobleDelValor = valor => valor * 2 // Función Fecha - solo se puede acceder luego de ser declarada
console.log(dobleDelValor(4));

const array3 = array.map(dobleDelValor)
console.log(array3);