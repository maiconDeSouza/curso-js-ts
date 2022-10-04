//Escreva uma função que recebe dois números e retorne o maior
// function maiorNumero(num1 = 0, num2 = 0){
//     const maior = Math.max(num1, num2)

//     console.log(maior)
// }

const maiorNumero = (num1, num2) => console.log(Math.max(num1, num2))

maiorNumero(29, 12)

function maiorNumeroEntreVarios(...numeros){
    const arrNumeros = numeros
    const maior = Math.max(...arrNumeros)
    console.log(maior)
}

maiorNumeroEntreVarios(2, 7, 1, 9, 18, 23, 2, 23, 4, 58)