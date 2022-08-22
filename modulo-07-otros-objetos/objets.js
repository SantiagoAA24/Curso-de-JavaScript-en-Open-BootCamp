// Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    libros_favoritos: ['El universo elegante', 'Habitos Atomicos'],
    "4-juegos": [1, 2, 3, 4],
}

console.log(obj.apellido)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "Santiago" // Cambia el objeto original también (misma dirección de memoria)
console.log(obj2.nombre)
console.log(obj.nombre)

let val1 = 4
let val2 = val1
val2 = 6 // No cambia el objeto original
console.log(val1)
console.log(val2)

const obj3 = {...obj} // ESTA ES LA FORMA CORRECTA DE HACERLO
console.log(obj3.nombre)

obj3.nombre = "Jorge"
console.log(obj3.nombre)
console.log(obj.nombre)

// Ordenar lista de objetos en función de una propiedad

const peliculas = [
    {titulo: "Lo que el viento se llevó", anio: 1939},
    {titulo: "Titanic", anio: 1997},
    {titulo: "Mohana", anio: 2016},
    {titulo: "El efecto mariposa", anio: 2004},
    {titulo: "TED", anio: 2012},
]

console.log(peliculas)

peliculas.sort((a, b) => a.anio - b.anio)
console.log(peliculas)
