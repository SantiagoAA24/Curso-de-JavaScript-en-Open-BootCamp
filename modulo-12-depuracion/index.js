const persona = {
    nombre: 'Santiago',
    edad: 20
}

console.log(persona)

function getDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = getDobleEdad(persona.edad)

console.log(dobleEdad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)