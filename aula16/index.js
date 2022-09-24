const recebendo = prompt('Digite seu Numero')
const numero = Number(recebendo)

const titulo = document.createElement('strong')
const raiz = document.createElement('p')
const inteiro = document.createElement('p')
const NotaNamber = document.createElement('p')
const arredondarBaixo = document.createElement('p')
const arredondarCima = document.createElement('p')
const duasCasasDecimais = document.createElement('p')

const body = document.querySelector('body')

titulo.innerText = `Seu número é ${numero}`
raiz.innerText = `Raiz quadra: ${Math.sqrt(numero)}`
inteiro.innerText = `${numero} é inteiro: ${Number.isInteger(numero)}`
NotaNamber.innerText = `É NaN: ${Number.isNaN(numero)}`
arredondarBaixo.innerText = `Arredondamento para baixo: ${Math.floor(numero)}`
arredondarCima.innerText = `Arredondamento para baixo: ${Math.ceil(numero)}`
duasCasasDecimais.innerText = `Com duas casas decimais ${numero.toFixed(2)}`

body.appendChild(titulo)
body.appendChild(raiz)
body.appendChild(inteiro)
body.appendChild(NotaNamber)
body.appendChild(arredondarBaixo)
body.appendChild(arredondarCima)
body.appendChild(duasCasasDecimais)