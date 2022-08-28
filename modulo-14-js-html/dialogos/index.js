const boton = document.querySelector('#btn')
// console.log(boton)

boton.addEventListener('click', () => {
    // alert('Se ha hecho click')
    // confirm('Estas de acuerdo?') && console.log('OK') // Operador binario
    // confirm('Estas de acuerdo?') 
    //     ? console.log('OK') 
    //     : console.log('NO!') // Operador ternario
    const respuesta = confirm('¿Seguro?')
    if (respuesta) {
        console.log('Estás de acuerdo')
    } else {
        console.log('No estás de acuerdo')
    }
})

const botonInfo = document.querySelector('#info')

botonInfo.addEventListener('click', () => {
    const nombre = prompt('¿Cuál es tu nombre?')
    nombre ? console.log('Tu nombre es ' + nombre) 
        : console.log('No has introducido nada')
})

const lista = [
    {
        nombre: 'Santiago',
        edad: 20
    },
    {
        nombre: 'Sofia',
        edad: 16
    },
    {
        nombre: 'Consuelo',
        edad: 38
    }
]

// console.log(lista)
console.table(lista)