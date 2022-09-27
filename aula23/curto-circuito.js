//const texto = '' //Aqui retorna o null, pq o primeiro valor é negativo
const texto = 'Um texto Qualquer'

const result = texto || null

const result2 = true && 'Texto' && NaN && 23
const result3 = true && 'Texto' && [] && 23


console.log(result)
console.log(result2)
console.log(result3)

console.log('-------------')

const isValid = false

function digaOi(){
    console.log('Oi')
}

isValid && digaOi() 

console.log('-------------')
const corUsuario = ''
const corPadrao = 'Dark'

const corSite = corUsuario || corPadrao

console.log(corSite)
