function saudacao(){
    console.log('Oi')
    // const nome = 'Maicon' protegido dentro do escopo da função
}

saudacao()
                                //Parametros
function saudacoaoComArgumentos(nome = ''){
    console.log(`Bom dia! ${nome}`)
}
                        //Argumentos
saudacoaoComArgumentos('Raquel')
saudacoaoComArgumentos()
 
const raiz = function(valor){
    return valor ** 0.5
}

console.log(raiz(9))

const aoCubo = valor => valor ** 2 //arrow function

console.log(aoCubo(9))