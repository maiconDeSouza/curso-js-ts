/*
    Primitivos (valores imutáveis) -> string, number, boolean, undefined, null, (bigInt e symbol)
*/

let nome = 'Luiz'
nome = 'Otávio' //Aqui eu não mudei o valor Luiz, mas sim o valor da variavél 
console.log(nome)
nome = 'Luiz'
console.log(nome[0])
nome[0] = 'R' //Outro exemplo que não consigo mudar o valor de luiz, pois tentei mudar a primeira letra
console.log(nome)


let a = 'Casa'
let b = a
console.log(a, b)
b = 'Casa2'
console.log(a, b)

//Valores por referência (mutável) -> array, object, function

let arr1 = [1, 2, 3]
let arr2 = arr1 // neste caso não existe uma copia, mas apenas ele vai apontar para o mesmo end
console.log(arr1, arr2)
arr2.pop()
console.log(arr1, arr2)
