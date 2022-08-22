// Declaración de una Lista
let var1 = {id: 12}
const array = [1, "Hola", false, {id: 5}, null, undefined, var1]
console.log(array)

// Acceder a los valores de una lista
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Métodos para una lista:

// .push() - para introducir valores al final de una lista
array.push("final", 45, false)
console.log(array)

// .unshift() - para introducir valores al inicio de una lista
array.unshift("inicio", 63, null)
console.log(array)

const array2 = [1, 3, "Hola", false]

// .pop() - para eliminar valores al final de una lista
array2.pop()
console.log(array2)

// .shift() - para eliminar valores al inicio de una lista
array2.shift()
console.log(array2)

const array3 = [1, 2, 3, 4, 5, 6]

// .splice() - Eliminar valores de una lista
array3.splice(2, 1) // (indice inicial, numero de elementos a eliminar)
console.log(array3)

// .splice() - Añadir valores en una lista
array3.splice(2, 0, "Hola", 3) // (indice inicial, 0, elemento a añadir, elemento a añadir, ...)
console.log(array3)

// .splice() - Modificar valores de una lista
array3.splice(2, 1, 3) // (indice del elemento a modificar, 1, nuevo elemento modificado)
console.log(array3)