/*
Escreva uma função que recebe um número e retorne o seguinte:
* Número é divisivel por 3 = Fiz
* Número é divisivel por 5 = Buzz
* Número é divisivel por 3 e 5 = FizzBuzz
* Número não divisivel por 3 ou 5 = retorna o próprio Número
* Checar se é número, caso não seja = retornar o mesmo valor enviado
* Use a função com números de 0 a 100
*/

function testeFizBuzz(numero){
    if(typeof numero !== 'number')return numero
    if(numero % 3 === 0 && numero % 5 === 0)return `FizBuzz`
    if(numero % 3 === 0)return `Fiz`
    if(numero % 5 === 0)return `Buzz`
    return numero
}

// console.log(testeFizBuzz(9))

for(let i = 0; i <= 100; i++){
    console.log(`${i} -> ${testeFizBuzz(i)}`)
}

