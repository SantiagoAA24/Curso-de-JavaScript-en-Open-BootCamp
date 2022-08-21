// strings

let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro día me dijo literlmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro día me dijo literlmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro día me dijo literlmente 've a sacar la basura'";
let str_comillas_simples_2 = 'El otro día me dijo literlmente \'ve a sacar la basura\'';

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

// Comillas invertidas

let str_backticks = `Esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Santiago";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantillas HTML

let plantilla = `
<html>
    <h1> Pagina web de ${nombre} </h1>
    <p> Este es un parrafo </p>
</html>
`;

console.log(plantilla);

// Variables en HTML

let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];