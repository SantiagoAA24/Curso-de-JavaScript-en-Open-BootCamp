// Metodos con strings

let str = "Hola soy un string";

// Longitud de un string
console.log(str.length)

// Parte de un string
let slice_str = str.slice(5, 10);

//slice
console.log(slice_str);

// substring
let substring_str = str.substring(5, 10);
console.log(substring_str);
//substr (obsoleto)
let substr_str = str.substr(5, 10);
console.log(substr_str);

// Remplazar contenido de un string
let cadena = "Hola mi nombre es Gorka";
console.log(cadena);
console.log(cadena.replace('Gorka', 'Santiago'));

// ''' para varias instancias
let texto = "Cuando cuentes cuentos, cuenta cuántos cuentos cuentas, porque si no cuentas cuántos cuentos cuentas, nunca sabrás cuántos cuentos cuentas tú.";
console.log(texto.replace('cuentos', 'carros')); // replace solo actúa sobre la primera instancia
console.log(texto.replace(/cuentos/g, 'carros')); // la expresion regular con 'g' ayuda a remplazar todas las instancias
