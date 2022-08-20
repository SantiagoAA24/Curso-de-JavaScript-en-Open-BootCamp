// Bucles

// for
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 7, 10, 12];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

// for - of
for (let valor of lista) {
    console.log(valor);
}

// forEach
lista.forEach(valor => {
    console.log(valor);
})

let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}

// for - in
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

let i = 0;
let max = 10;

// while
while (i <= max) {
    console.log(i);
    i++;
}

i = 15;
// do - while
do {
    console.log(i);
    i++;
} while (i < max);