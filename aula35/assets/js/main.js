const div = document.querySelector('div')

function criaTag({tag}){
    return document.createElement(tag)
}

function criaTexto({texto}){
    return document.createTextNode(texto)
}

function addElementosNasTags(tagPai, filho){
    tagPai.appendChild(filho)
}

const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
]

for(let i = 0; i < elementos.length; i++){
    const tag = criaTag(elementos[i])
    const texto = criaTexto(elementos[i])
    addElementosNasTags(tag, texto)
    addElementosNasTags(div, tag)
}