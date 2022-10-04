const isValid = true
let nome = 'Dante'
var nome2 = 'Dante'

console.log(nome, nome2)

if(isValid){
    let nome = 'Parrudo' //criando
    var nome2 = 'Parrudo' //redeclarando

    console.log(nome, nome2)

    if(isValid){
        const nome = 'Qualquer outro nome'
        console.log(`Bloco dentro de bloco ->`, nome, nome2)
    }
}

console.log(nome, nome2)

console.log(numero) //hosting - este efeito não acontece com let

var numero = 123