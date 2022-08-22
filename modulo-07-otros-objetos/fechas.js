// Fechas

const fecha = new Date() // Fecha de ahora
console.log(fecha)

const fecha2 = new Date(1987, 10, 20, 2, 2, 4, 342) // Los meses inicializan en 0 (Enero -> 0)
console.log(fecha2)

const fecha3 = new Date(1000000000000)
console.log(fecha3)

const fecha4 = new Date(-1000000000000)
console.log(fecha4)

const fecha5 = new Date("October 13, 1979 12:15:22")
console.log(fecha5)

console.log(fecha2 > fecha)

const fecha6 = new Date(1987, 10, 20, 2, 2, 4, 342) // Los meses inicializan en 0 (Enero -> 0)
console.log(fecha6)

// Comparar fechas
console.log(fecha2 === fecha6) // ERROR -> no se pueden comparar fechas así
console.log(fecha2.getTime() === fecha6.getTime()) // Forma correcta de comparar fechas

// Dia de una fecha
console.log(fecha.getDate())

// Mes de una fecha
console.log(fecha.getMonth() + 1)

// Año de una fecha
console.log(fecha.getFullYear())

// Para pasar la fecha a string
console.log(fecha.toLocaleDateString('en-US'))
