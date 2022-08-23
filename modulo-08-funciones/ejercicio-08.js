// Ejercicio 08

function siempreTrue() {
    return true
}

console.log(siempreTrue())

function promesa() {
    console.log("Hola soy una promesa")
}

function asinc() {
    setTimeout(promesa, 5000)
}

asinc()

function* indicesPares() {
    let id = 0
    while (true) {
        id += 2
        if (id === 10) return id
        yield id
    }
}

const gen = indicesPares()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) // done === true
