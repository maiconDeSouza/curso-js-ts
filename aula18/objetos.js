const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
}

console.log(pessoa1)
console.log(pessoa1.nome)

//Factory Functions
function fabricaDePessoas(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala(){
            return `Oi ${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa2 = fabricaDePessoas('Rita', 'Totti')
console.log(pessoa2)
console.log(pessoa2.fala())
