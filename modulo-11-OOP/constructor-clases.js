class Persona {
    nombre
    edad
    isDeveloper

    constructor(nombre, edad, isDeveloper) { // Metodo constructor
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
}

const nueva_persona = new Persona('Santiago', 20, true) // Instancia de la clase Persona
console.log(nueva_persona)
nueva_persona.saludo()
console.log(nueva_persona instanceof Persona)
