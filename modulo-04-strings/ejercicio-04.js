let nombre = "Santiago"
console.log(nombre)

let apellido = "Acevedo"
console.log(apellido)

let estudiante = nombre + " " + apellido
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let longitud = estudiante.length
console.log(longitud)

let primeraLetraNombre = nombre[0]
console.log(primeraLetraNombre)

let ultimaLetraApellido = apellido[apellido.length - 1]
console.log(ultimaLetraApellido)

let estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)

let isNombreInEstudiante = estudiante.includes(nombre)
console.log(isNombreInEstudiante)