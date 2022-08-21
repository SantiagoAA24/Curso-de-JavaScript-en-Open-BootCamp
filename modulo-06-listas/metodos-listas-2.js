// Métodos en listas (Parte 2)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

// .concat() - para unir dos listas
console.log(lista1.concat(lista2))
console.log(lista1) // No modifica el valor de la lista1

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Unir dos listas usando el factor de propagación (...)
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// .slice() - para obtener una porción de una lista (No modifica el valor del array original)
const array = ["hola", 1, 2, 3, true, null, "adios"]

console.log(array.slice(3))
console.log(array.slice(1,4))

const array2 = array.slice(2,5)
console.log(array2)

const array3 = array.slice(2, -2)
console.log(array3)