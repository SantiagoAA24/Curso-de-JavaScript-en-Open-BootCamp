const a = 4
const b = 8

console.log(a * b)
console.log("Hola")

const p = document.getElementById("parrafo")

console.log(p)

// Eventos --> document.on...()
// Funciones que se pueden vincular a varios objetos

function pasaPorPantalla() {
    console.log(this)
}
pasaPorPantalla()

const objeto = { tipo: "parrafo", longitud: 32 }
const pasaObjetoPorPantalla = pasaPorPantalla.bind(objeto)
pasaObjetoPorPantalla()
