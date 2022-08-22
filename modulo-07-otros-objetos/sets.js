// Sets - No se repiten los valores

const array = [1, 2, 3, 4, 5, 6, 1, 2, 4, "hola", {id: 5}, {id: 5}]
const set = new Set(array)

console.log({id: 5} === {id: 5})

console.log(array)
console.log(set)

// .add()
set.add(9)
console.log(set)
set.add(4) // No añade valores que ya tiene
console.log(set)

// .delete()
set.delete("hola")
console.log(set)

// .clear()
// set.clear()
// console.log(set)

// .has()
console.log(set.has(3))
console.log(set.has("hi"))

// .size
console.log(set.size)

// .forEach()
set.forEach(valor => console.log(valor))

// .values() - iterator
console.log(set.values())
