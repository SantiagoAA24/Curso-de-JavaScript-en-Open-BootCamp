// localStorage.setItem('nombre', 'Santiago')
// localStorage.setItem('nombre', 'Sofia')

console.log(localStorage.getItem('nombre'))

// JSON.stringify(objeto) ---> Convierte un objeto array en string
localStorage.setItem('persona', JSON.stringify({ nombre: 'Santiago', edad: 20 }))

// JSON.parse(objeto) ---> Revierte el JSON.stringify(objeto)
console.log(JSON.parse(localStorage.getItem('persona')))

localStorage.removeItem('nombre')

console.log(localStorage.getItem('nombre'))

// localStorage.clear()

sessionStorage.setItem('nombre-sesion', 'Santiago')

// Cookies:

document.cookie = 'nombreCookie=SantiagoCookie'

document.cookie = 'nombreCaducidad=Nombre; expires=' + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)