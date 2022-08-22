// Metodos para listas (Parte 6)

const array = [4, -5, 10, -3, 16, 2, -1, 9]
console.log(array)

const resultado = array.every(valor => {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
})
console.log(resultado)

const resultado2 = array.every(valor => {
    if (valor > 0) {
        return true
    } else {
        return false
    }
})
console.log(resultado2)

const resultado3 = array.every(valor => valor > 0)
console.log(resultado3)

// Comparación de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2) // false - Las listas no se pueden comparar así

const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, indice) => valor === array2[indice])
    return res
}

console.log(compararArrays(ar1, ar2))

const ar3 = [1, 2, 3, 6]
console.log(compararArrays(ar1, ar3))
