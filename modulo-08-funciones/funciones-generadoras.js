// Funciones generadoras

function* generaId() {
    let id = 0
    while (true) {
        id++
        if (id === 10) return id
        yield id // Se queda esperando hasta que se vuelva a llamar
    }
}

const gen = generaId()

console.log(gen.next().value) // gen es un tipo de objeto Generator
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) // DONE
