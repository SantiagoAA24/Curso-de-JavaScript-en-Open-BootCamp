// Ejercicio 07-3 - Fechas

const hoy = new Date()
console.log(hoy)

const miNacimiento = new Date("July 24, 2002")
console.log(miNacimiento)

const masTarde = hoy.getTime() > miNacimiento.getTime()
console.log(masTarde)

const diaNacimiento = miNacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = miNacimiento.getMonth() + 1
console.log(mesNacimiento)

const anioNacimiento = miNacimiento.getFullYear()
console.log(anioNacimiento)
