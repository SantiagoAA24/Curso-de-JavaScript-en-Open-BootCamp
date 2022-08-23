// Funciones asíncronas

function asinc() {
    // Hace una llamada a una base de datos externa
    // No se conoce el tiempo de duración
    // No se sabe si habrá errores
}

// Promesas

const promesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    console.log(i)
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

promesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
