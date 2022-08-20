// Listas, arrays, arreglos

const lista1 = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3); // array con 3 espacios vacios

lista3[0] = "Soy el primer elemento de la lista";

const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Santiago", "Consuelo", "Sofia"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}

movil.anio = 2019;
movil.marca = "Samsung"; // se pueden editar los atributos de una constante, mas no la constante en si

console.log(movil.contactos)
console.log(movil.tarjeta.almacenamiento)
console.log(movil.anio)
console.log(movil.marca)
console.log(movil["altura-tarjeta"])

// Fechas

const ahora = new Date();
console.log(ahora)

const fecha_milis = new Date(10);
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const ani = ahora.getFullYear()

console.log(dia, mes, ani)