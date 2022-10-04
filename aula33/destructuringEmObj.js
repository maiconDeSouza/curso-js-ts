const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    end: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const {nome:nomeCopia, nome, end:{ rua } } = pessoa
console.log(nome, rua, nomeCopia)

