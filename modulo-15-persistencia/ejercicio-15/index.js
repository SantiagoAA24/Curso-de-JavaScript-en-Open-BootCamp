const nombre = 'Santiago'
const apellido = 'Acevedo'

const miNombre = { nombre, apellido }

sessionStorage.setItem('miNombre', JSON.stringify(miNombre))

localStorage.getItem('miNombre', JSON.stringify(miNombre))

document.cookie = "miNombre = { nombre: 'Santiago', apellido: 'Acevedo }; expires=" + new Date(2022, 7, 28, 1, 35).toUTCString()
