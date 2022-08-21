let altura_cm = 168;
console.log(altura_cm);

let altura_m = altura_cm / 100;
console.log(altura_m);

let peso_kg = 52.8;
console.log(peso_kg);

let altura_m_redondeada = altura_m.toFixed(1);
console.log(altura_m_redondeada);

let peso_kg_redondeado = (peso_kg - 0.5).toFixed();
console.log(peso_kg_redondeado);

let max_valor_JS = Number.MAX_VALUE;
console.log(max_valor_JS);

let isIgualMax = max_valor_JS === max_valor_JS + 1;
console.log(isIgualMax);
