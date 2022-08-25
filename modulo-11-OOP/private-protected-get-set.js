class Persona {
    // Private -> # - solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    // Protected -> _ - solo se puede acceden desde dentro de la clase y desde clases hijas
    _isDeveloper = true
    constructor(nombre, edad) { // Metodo constructor
        this.#nombre = nombre
        this.#edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años`)
    }
    getNombre() { // getter
        return this.#nombre
    }
    setNombre(nombre) {
        this.#nombre = nombre
    }
    // #getEdad() {
        // return this.#edad
    // }
    getEdad() {
        return this.#edad
    }
    setEdad(edad) {
        this.#edad = edad
    }
}

const persona = new Persona('Santiago', 20)

console.log(persona) // No muestra los atributos de la persona

console.log(persona.nombre) // No se puede acceder al atributo
// console.log(persona.#nombre) // Ni de esta forma
console.log(persona.getNombre()) // Esta sería la forma correcta de acceder a él
// console.log(persona.#getEdad()) // A menos que el get tambien este privado

persona.saludo()

console.log(persona.isDeveloper)

const edad = persona.getEdad()
console.log(edad)

const nueva_edad = 24
persona.setEdad(nueva_edad)
console.log(persona.getEdad())
