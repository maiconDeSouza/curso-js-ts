const stringEscapada = "Um \"texto\""
console.log(stringEscapada)

const barraInvertida = "Nova \\Teste"
console.log(barraInvertida)
console.log(barraInvertida[0])
console.log(barraInvertida.charAt(6))
const newStringConcat = barraInvertida.concat('Vim pelo concat')
console.log(newStringConcat)

console.log(barraInvertida.indexOf('T'))
console.log(barraInvertida.indexOf('e', 8))

console.log(barraInvertida.match(/[a-z]/g))
console.log(barraInvertida.search(/[a-z]/g))
console.log(barraInvertida.search(/s/))

const retorno = barraInvertida.replace("Nova", "New")

console.log(retorno)

console.log(barraInvertida.replace(/e/g, "3"))
console.log(barraInvertida.length)
console.log(barraInvertida.slice(-3))
console.log(barraInvertida.substring(barraInvertida.length - 3))

const rei = "O rato roel a roupa do rei de roma."
console.log(rei.split(' '))
console.log(rei.split(' ', 3))