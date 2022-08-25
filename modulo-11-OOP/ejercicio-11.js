class Estudiante {
    nombre
    asignaturas = ['Javascript', 'HTML', 'CSS']
    constructor(nombre) {
        this.nombre = nombre
    }
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevo_estudiante = new Estudiante('Santiago')
console.log(nuevo_estudiante.obtenDatos())