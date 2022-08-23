const miFuncion = val => {
    if (typeof val === "number") return val * 2
    throw new Error("El valor debe ser de tipo número")
}

console.log(miFuncion(4))
// const elDoble = miFuncion("hola")

const numero = "hola"

try {
    console.log('Está ejecutándose de manera correcta')
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    console.error(e); // Mejor usar console.error() para mostrar errores
    console.log('Error!');
} finally {
    console.log('Esto se va a ejecutar tanto si se produce un error, como si no existe ninguno')
}

// Errores comunes:
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError

