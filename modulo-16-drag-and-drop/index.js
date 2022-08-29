const parrafos = document.querySelectorAll('.parrafo')
// console.log(parrafos)
const secciones = document.querySelectorAll('.seccion')
// console.log(secciones)

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        console.log('Esoy arrastrando el párrafo ' + parrafo.innerText)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
        const elementoFantasma = document.querySelector('.imagen-fantasma')
        event.dataTransfer.setDragImage(elementoFantasma, 0, 0)
    })
    parrafo.addEventListener('dragend', () => {
        console.log('Lo he terminado de arrastrar')
        parrafo.classList.remove('dragging')
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy'
        console.log("Estoy sosteniendo el párrafo")
    })
    seccion.addEventListener('drop', event => {
        console.log('He soltado el párrafo')
        const idParrafo = event.dataTransfer.getData('id')
        // console.log('Párrafo id: ' + idParrafo)
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo) // Poner el párrafo en otra sección
    })
})
