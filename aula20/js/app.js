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

function criarTag(tag){
    return document.createElement(tag)
}

function criarTexto(texto){
    return document.createTextNode(texto)
}

function addLi(arr){
    ul.innerText = ''
    arr.forEach(e => {
        const li = criarTag('li')
        const texto = criarTexto(`${e.nome} ${e.sobrenome} ${e.peso} ${e.altura}`)
        li.appendChild(texto)
        ul.appendChild(li)
    })
}

function zeraInput(){
    formulario.reset()
}



enviar.addEventListener('click', e => {
    e.preventDefault()
    if(!nome.value || !sobrenome.value || !altura.value || !peso.value){
        alert('Preencha todos os campos')
        zeraInput()
        return
    }

    const novaPessoa = new Pessoa(nome.value, sobrenome.value, peso.value, altura.value)
    arrPessoas.push(novaPessoa)
    addLi(arrPessoas)
    zeraInput()

})