// Ejercicio 07-2 - Objetos

const datosPersonales = {
    nombre: "Santiago",
    apellido: "Acevedo",
    edad: 20,
    altura: 1.68,
    esDesarrollador: true,
}
console.log(datosPersonales)

const edad = datosPersonales.edad
console.log(edad)

const listaDatosPersonales = [{...datosPersonales}]
console.log(listaDatosPersonales)

const mejorAmigo1 = {
    nombre: "Andres",
    apellido: "Nieto",
    edad: 19,
    altura: 1.78,
    esDesarrollador: true,
}

const mejorAmigo2 = {
    nombre: "Duvan",
    apellido: "Izaquita",
    edad: 20,
    altura: 1.67,
    esDesarrollador: true,
}

const ordenados = []
ordenados.push({...datosPersonales})
ordenados.push({...mejorAmigo1})
ordenados.push({...mejorAmigo2})
console.log(ordenados)

ordenados.sort((a, b) => b.edad - a.edad)
console.log(ordenados)