const isValid = confirm('Gostaria de Confirmar?')

isValid ? alert('Confirmado') : alert('Não confirmado')

const nome = prompt('Digite seu nome.')

const h1 = document.querySelector('h1')

// console.dir(h1)

h1.innerText = `Olá ${nome}`