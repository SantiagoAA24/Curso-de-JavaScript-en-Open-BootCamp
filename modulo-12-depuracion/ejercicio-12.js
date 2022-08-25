function Fibonacci(num) {
    const lista = []
    let anterior = 0
    let siguiente = 1
    for (let i = 0; i < num; i++) {
        lista.push(siguiente)
        siguiente = anterior + siguiente
        anterior = siguiente - anterior
    }
    return lista
}

const num = 10
console.log(Fibonacci(num))
