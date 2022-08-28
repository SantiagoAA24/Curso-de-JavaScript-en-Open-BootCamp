const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => {
    console.log(evento) // Pasa la información del evento por pantalla
    evento.preventDefault() // Evita que se ejecute el comportamiento por defecto
}) // Se ejecuta cada vez que hay un submit
