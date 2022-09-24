let num1 = 1
let num2 = 2.5
let num3 = 1250
let num4 = 123.234556

console.log(num1.toString() + num2.toString())
console.log(num3.toString(2)) //Representação binária
console.log(num4.toFixed(2)) //duas casas decimais 
console.log(Number.isInteger(num4)) //ver se número é inteiro
console.log(Number.isNaN(2 * 'casa')) //é um Not a Number

//IEEE 754-2008
const n1 = 0.7
const n2 = 0.1
console.log(n1 + n2) //imprecisão

console.log(n1 + n2 + n2 + n2)
console.log(n1 + Number( (n2 + n2 + n2).toFixed(2)))
console.log(n1 + ((n2 * 100) + (n2 * 100) + (n2 * 100)) / 100)

