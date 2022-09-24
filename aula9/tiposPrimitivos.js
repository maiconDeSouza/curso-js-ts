//String, number, undefined, null, boolean, symbol
const nome = "Maicon" //String 
const nome2 = 'Maicon' //String
const nome3 = `Maicon` //String

const numero = 23 //Number
const numero2 = 75.8 //Number

let nomeAluno; //Undefined -> não aponta para local algum na mémoria -> tipo undefined
let sobreNomeAluno = null //não aponta para local algum na mémoria -> tipo objeto

const testeNull = null
let recebeNull = testeNull

console.log(testeNull, recebeNull)

recebeNull = 'New String'

console.log(testeNull, recebeNull) // Mesmo sendo do tipo OBJ null não é passado por referencia como 
//se fosse um array ou um objeto


console.log(typeof nomeAluno, typeof sobreNomeAluno)

const isValid = true //Boolean