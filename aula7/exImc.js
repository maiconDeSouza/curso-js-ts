/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.9259...
*/

const nome = 'Luiz Otávio Miranda'
const idade = 30
const peso = 84
const alturaEmMetros = 1.8
const imc = peso / Math.pow(alturaEmMetros, 2) //alturaEmetros ** 2

// console.log(imc)

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`)