// Metodos para listas (Parte 4) - Avanzados

const array = ["Bogota", "Cartagena", "Barranquilla", "Medellin", "Tolima"]

const val = array.forEach(v => {
    console.log(v)
    return 4 // No retorna nada, incluso si se usa return
})
console.log(val) // No retorna nada

// .map()
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const arrayObj = [
    {nombre: "Andres", edad: 24},
    {nombre: "Felipe", edad: 25},
    {nombre: "Santiago", edad: 15},
    {nombre: "Sofia", edad: 16},
    {nombre: "Laura", edad: 19}
]

// .filter()
const personasMayores = arrayObj.filter(obj => obj.edad >= 20)
console.log(personasMayores)

const nuevaLista = arrayObj.filter(obj => obj.nombre !== "Sofia")
console.log(nuevaLista)

const valores = [2, 15, 56, 5, 87, 8]

// .reduce()
const suma = valores.reduce((acumulado, actual, indice, original) => {
    console.log(acumulado)
    console.log(actual)
    console.log(indice)
    console.log(original)
    return acumulado + actual
})
console.log(suma)
