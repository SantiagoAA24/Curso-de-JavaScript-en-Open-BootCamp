// Metodos para listas (Parte 5) - Modernos

const array = [1, 14, 5, 12, 11, 3, 4]
console.log(array)

// .sort() - MODIFICA EL ARRAY

array.sort((a, b) => -1)
console.log(array)

array.sort((a, b) => {
    if (a < b) return -1
})
console.log(array)

const array2 = [1, 14, 5, 12, 11, 3, 4]
console.log(array2)

// de menor a mayor
array2.sort((a, b) => a - b)
console.log(array2)

const array3 = [1, 14, 5, 12, 11, 3, 4]
console.log(array3)

// de mayor a menor
array3.sort((a, b) => b - a)
console.log(array3)

const listaObjetos = [
    {nombre: "Andres", edad: 24},
    {nombre: "Felipe", edad: 25},
    {nombre: "Santiago", edad: 15},
    {nombre: "Sofia", edad: 16},
    {nombre: "Laura", edad: 19}
]

const lista1 = listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(lista1)

const lista2 = listaObjetos.sort((a, b) => b.edad - a.edad)
console.log(lista2)
