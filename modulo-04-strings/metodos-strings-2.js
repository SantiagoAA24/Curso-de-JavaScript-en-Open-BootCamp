// Metodos en strings (Parte 2)

// Mayúsculas y Minúsculas
let input = "EscORpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toUpperCase())
// console.log(input.toLocaleLowerCase()) // exactamente igual a console.log(input.toLowerCase())
// console.log(input.toLocaleUpperCase()) // exactamente igual a console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())

// Concatenar cadenas
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)

// Eliminar espacios al inicio y al final
console.log(str_3.trim())
console.log(str_3.trim().length)

// Eliminar espacios solo al inicio
console.log(str_3.trimStart())
console.log(str_3.trimStart().length)

// Eliminar espacios solo al inicio
console.log(str_3.trimEnd())
console.log(str_3.trimEnd().length)

// Letra en cierta posición de un string
let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", " ", "s", "o", ...]

console.log(str_4.charAt(0))
console.log(str_4.charAt(1))
console.log(str_4.charAt(2))
console.log(str_4.charAt(3))
console.log(str_4[4])
console.log(str_4[5])
console.log(str_4[6])
console.log(str_4[7])

// Posicion de una palabra dentro de un string
let str_5 = "Hola soy Santiago y me gusta programar. Soy Santiago y tambien se tocar el piano."

console.log(str_5.indexOf("Santiago"))
console.log(str_5.charAt(9))
console.log(str_5.charAt(10))
console.log(str_5.charAt(11))
console.log(str_5.charAt(12))
console.log(str_5.charAt(13))
console.log(str_5.charAt(14))
console.log(str_5.charAt(15))
console.log(str_5.charAt(16))

console.log(str_5.indexOf("Gorka")) // No existe

console.log(str_5.lastIndexOf("Santiago"))
console.log(str_5.charAt(44))
console.log(str_5.charAt(45))
console.log(str_5.charAt(46))
console.log(str_5.charAt(47))
console.log(str_5.charAt(48))
console.log(str_5.charAt(49))
console.log(str_5.charAt(50))
console.log(str_5.charAt(51))
