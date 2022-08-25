const persona = {
    nombre: 'Santiago',
    edad: 20,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}

// console.log(persona)
// persona.saludo()

const otra_persona = {
    nombre: 'Miguel',
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

// console.log(otra_persona)
// otra_persona.saludo()

// Factory function
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hola')
        }
    }
}

const nueva_persona = crearPersona("Juan", 23, true)
// console.log(nueva_persona)
