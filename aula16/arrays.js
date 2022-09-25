const alunos = [ 'Luiz', 'Maria', 'Jorgeta', 'Karol' ]

console.log(alunos)
console.log(alunos[1])

alunos[0] = 'Eduardo'

console.log(alunos)


alunos[4] = 'Pedro' //Não existe ainda

console.log(alunos)

alunos[alunos.length] = 'Rita' //Forma de add ao final, mas não é a melhor forma
console.log(alunos)

alunos.push('Dante') //sempre add no final, uma forma melhor
console.log(alunos)

alunos.unshift('Bethy') //add no inicio
console.log(alunos)

const nome1 = alunos.pop() // retira do final
const nome2 = alunos.shift() // retira do inicio
console.log(alunos)
console.log(nome1, nome2)
console.log(alunos.slice(0, 3))
console.log( alunos instanceof Array )

// function Pessoa(nome, sobrenome){
//     this.nome = nome
//     this.sobrenome = sobrenome
// }

// const maicon = new Pessoa('Maicon', 'Souza')
// const bianca = {
//     nome: 'Bianca',
//     sobrenome: 'Mendes'
// }

// console.log(maicon)
// console.log(`Maicon Instancia de Objeto ? ${maicon instanceof Object}`)
// console.log(`Maicon Instancia de Pessoa ? ${maicon instanceof Pessoa}`)

// console.log(bianca)
// console.log(`Bianca Instancia de Objeto ? ${bianca instanceof Object}`)
// console.log(`Bianca Instancia de Pessoa ? ${bianca instanceof Pessoa}`)