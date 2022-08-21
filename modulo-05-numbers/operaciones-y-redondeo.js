// Operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma
console.log(a + b);

// Resta
console.log(a - b);

// Multiplicación
console.log(a * b);

// División
console.log(a / b);

// numbers to strings
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondear números decimales
let c = 3.3;
let d = c * 3;
console.log(d);

// .toFixed() limita el número de decimales y lo pasa de number a string
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

// .toPrecision() límita el número de cifras significativas y pasa de number a string (con notación científica)
console.log(d.toPrecision(4));
console.log(typeof d.toPrecision(4));
