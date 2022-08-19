// Notacion

// Cada linea debe estar marcada al final con ;
// Para acceder a los atributos de los objetos se usa .

// [] -> listas, arreglos

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array[0]);

// () -> funciones
// {} -> objetos, funciones, estructuras de control

const movil = {
    anchura: 5,
    altura: 10
}
function suma(a, b) {
    return a + b;
}
if (true) {
    console.log(suma(1, 2));
}