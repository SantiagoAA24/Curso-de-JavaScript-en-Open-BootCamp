// Carga y sobrecarga de funciones

function hola() { // Solo carga la función a usar en el momento en que la necesite
    console.log("Hola soy la función hola()")
}

function saludar() {
    hola()
}

saludar()

function recursiva() {
    recursiva()
}

// recursiva() // SOBRECARGA DE FUNCIONES - por usar función recursiva
