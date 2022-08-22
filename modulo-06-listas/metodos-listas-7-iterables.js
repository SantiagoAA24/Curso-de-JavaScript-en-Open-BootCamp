// Metodos para listas (Parte 7)

// .some()

const array = [15, 4, 869, 48, 8, 89, 7, 9, 56, 486]

const res1 = array.some(valor => valor > 400)
console.log(res1)

const res2 = array.some(valor => valor < 3)
console.log(res2)

const existe = array.some(valor => valor === 48)
console.log(existe)

const listaObjetos = [
    {nombre: "Andres", edad: 24},
    {nombre: "Felipe", edad: 25},
    {nombre: "Santiago", edad: 15},
    {nombre: "Sofia", edad: 16},
    {nombre: "Laura", edad: 19}
]

const existeFelipe = listaObjetos.some(persona => persona.nombre === "Felipe")
console.log(existeFelipe)

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")
console.log(existeFelipe)

// obtener listas a partir de objetos iterables

const str = "Hola soy Santiago"
const arr_str = Array.from(str)
console.log(arr_str)

const set = new Set([2, 3, "hi", 4])
const arr_set = Array.from(set)
console.log(arr_set)

const keys = array.keys()
console.log(keys)

const arr_keys = Array.from(keys)
console.log(arr_keys)
