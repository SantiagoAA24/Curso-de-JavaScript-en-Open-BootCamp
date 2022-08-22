// Ejercicio 06 - Métodos para listas

const listaCompra = ['huevos', 'leche', 'pan', 'panela', 'arroz']
console.log(listaCompra)

listaCompra.push('Aceite de Girasol')
console.log(listaCompra)

listaCompra.pop('Aceite de Girasol')
console.log(listaCompra)

const peliculasFavoritas = [
    {titulo: "Interestelar", director: "Christopher Nolan", fecha: "26 de Octubre del 2014"},
    {titulo: "Vengadores: Endgame", director: "Anthony y Joe Russo", fecha: "22 de Abril del 2019"},
    {titulo: "2012", director: "Roland Emmerich", fecha: "14 de Noviembre del 2009"}
]

const posterior2010 = peliculasFavoritas.filter(obj => obj.fecha.slice(-4) >= 2010)
console.log(posterior2010)

const directores = peliculasFavoritas.map(obj => obj.director)
console.log(directores)

const titulos = peliculasFavoritas.map(obj => obj.titulo)
console.log(titulos)

const directores_titulos_concat = directores.concat(titulos)
console.log(directores_titulos_concat)

const directores_titulos_fp = [...directores, ...titulos]
console.log(directores_titulos_fp)
