// Declaración de funciones

function saludar(nombre) {
    console.log("Hola " + nombre)
}

saludar("Santiago")

function despedir(nombre) {
    console.log("Adiós " + nombre)
}

despedir("Juan")

let persona = {nombre: "Juan", apellido: "Gonzales"}

function saludarPersona(objeto) {
    objeto.apellido = "Villar" // MODIFICA EL OBJETO ORIGINAL
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPersona(persona)
console.log(persona)

function imprimeNumero(numero = 7) { // Tiene un parámetro por defecto
    console.log(numero)
}

imprimeNumero()

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 2, "hola")

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 5)
console.log(s)

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "Adiós"
    return a * b
}

console.log(multiplicar(4, 9))
// console.log(variable_interna) // No se pueden usar variables internas de la función fuera de ellas
