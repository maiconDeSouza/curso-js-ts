function getElement(querySelector){
    return document.querySelector(`${querySelector}`)
}

function calculoIMC(peso, altura){
    return peso / (altura * altura)
}

function faixaDeIMC(resultadoIMC){
    if(resultadoIMC >= 40)return `Obesidade grau 3`
    if(resultadoIMC >= 35)return `Obesidade grau 2`
    if(resultadoIMC >= 30)return `Obesidade grau 1`
    if(resultadoIMC >= 25)return `Sobrepeso`
    if(resultadoIMC >= 18.5)return `Peso Normal`
    if(resultadoIMC < 18.5)return `Abaixo do peso`
}

function createElement(el){
    return document.createElement(el)
}

function addClass(el, statusIMC){
    if(statusIMC >= 30)return el.classList.add('red')
    if(statusIMC >= 25 || statusIMC < 18.5)return el.classList.add('yellow')
    if(statusIMC >= 18.5)return el.classList.add('green')
}

function writeElement(texto, el){
    return el.textContent = texto
}

function clearInput(querySelector){
    const selector = getElement(querySelector)
    selector.value = ''
}

function addElement(parentElement, child){
    return parentElement.appendChild(child)
}

function removeElement(parentElement, el){
    const p = getElement(el)
    return parentElement.removeChild(p)
}


const form = getElement('#formulario')


form.addEventListener('submit', e => {
    e.preventDefault()
    const peso = Number(getElement('#peso').value)
    const altura = Number(getElement('#altura').value)

   

    if(!peso || !altura){
        form.reset()
        return alert('Informe apenas números válidos')
    }

    const resultadoIMC = calculoIMC(peso, altura)
    const statusIMC = faixaDeIMC(resultadoIMC)
    const textoDeRetorno = `Seu IMC é de ${resultadoIMC.toFixed(2)} e você está na faixa ${statusIMC}`

    const p = createElement('p')
    addClass(p, resultadoIMC)
    writeElement(textoDeRetorno, p)

    const resultado = getElement('#resultado')
    removeElement(resultado, 'p')
    

    addElement(resultado, p)
    clearInput('#peso')
    clearInput('#altura')
})