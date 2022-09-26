const formulario = document.querySelector('form')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const enviar = document.querySelector('[type="button"]')
const ul = document.querySelector('ul')
const arrPessoas = []

function Pessoa(nome, sobrenome, peso, altura){
    this.nome = nome
    this.sobrenome = sobrenome
    this.peso = peso
    this.altura = altura
}

Pessoa.prototype.criarTag = function (tag){
    return document.createElement(tag)
}

Pessoa.prototype.criarTexto = function (texto){
    return document.createTextNode(texto)
}

Pessoa.prototype.addLi = function(arr){
    ul.innerText = ''
    arr.forEach(e => {
        const li = this.criarTag('li')
        const texto = this.criarTexto(`${e.nome} ${e.sobrenome} ${e.peso} ${e.altura}`)
        li.appendChild(texto)
        ul.appendChild(li)
    })
}

Pessoa.prototype.zeraInput = function(){
    formulario.reset()
}



enviar.addEventListener('click', e => {
    e.preventDefault()
    if(!nome.value || !sobrenome.value || !altura.value || !peso.value){
        alert('Preencha todos os campos')
        Pessoa.zeraInput()
        return
    }

    const novaPessoa = new Pessoa(nome.value, sobrenome.value, peso.value, altura.value)
    arrPessoas.push(novaPessoa)
    novaPessoa.addLi(arrPessoas)
    novaPessoa.zeraInput()

})