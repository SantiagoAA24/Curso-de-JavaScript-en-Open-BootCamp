// Operador .valueOf() - obtiene el valor numérico

let a = 2;
let b = new Number(3);
console.log(a);
console.log(b);
console.log(a + b);
console.log(b.valueOf());
console.log(a.valueOf() + b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity

let n = Number("Hola");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);
let divisor_2 = null;
console.log(numerador / divisor_2);

// string to number

let num = '5.89';
let num2 = 17.2;

console.log(typeof num);
console.log(num + num2); // Error
console.log(Number(num) + num2); // Solución
console.log(parseInt(num) + num2); // parseInt - convierte un número en un entero
console.log(parseFloat(num) + num2); // parseFloat - convierte un número en un flotante

// Números hexadecimales (base 16)

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

// Mínimo y Máximo

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
