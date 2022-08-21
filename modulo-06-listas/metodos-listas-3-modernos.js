// Metodos para listas (Parte 3) - Modernos

// Acceder a los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma moderna y mas eficiente
array.forEach(valor => {
    console.log(valor)
})

let suma = 0
const arrayNums = [1, 2, 3, 4, 5, 6]
arrayNums.forEach(valor => {
    suma += valor
})
console.log(suma)

// .find() - busca un valor dentro de una lista

const variable = arrayNums.find(valor => {
    if (valor === 5) {
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: "Andres", edad: 24},
    {nombre: "Felipe", edad: 25},
    {nombre: "Santiago", edad: 15},
    {nombre: "Sofia", edad: 16},
    {nombre: "Laura", edad: 19}
]

const objeto = listaObjetos.find(o => {
    if (o.nombre === "Andres") {
        return true
    }
})
console.log(objeto.edad)

const objeto_ = listaObjetos.find(o => o.nombre === "Andres")
console.log(objeto_.edad)

const {edad} = listaObjetos.find(o => o.nombre === "Andres")
console.log(edad)
