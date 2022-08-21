// Metodos de strings (Parte 3)

// Buscar de acuerdo a expresiones regulares
let texto = "Pepe pide pipas y Pepe pide papas. Pudo Pepe pelar pipas, pero no pudo Pepe pelar papas. Porque las papas de Pepe no eran papas, eran pepinos. ¡Pepe metió la pata!"

console.log(texto.match(/Pepe/g).length)

// Existe la palabra dada dentro del texto ?
console.log(texto.includes("pepinos"))
console.log(texto.includes("pepe"))

// Empieza el texto con una palabra dada ?
console.log(texto.startsWith("Pepe"))
console.log(texto.startsWith("Tito"))

// Termina el texto con una palabra dada ?
console.log(texto.endsWith("."))
console.log(texto.endsWith("!"))
