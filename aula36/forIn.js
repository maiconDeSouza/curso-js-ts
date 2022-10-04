const frutas = ['Pera', 'Maçã', 'Uva']

//Ele recebe p indice no array
for(let i in frutas){
    console.log(frutas[i])
}

//No obj ele recebe a chave
const pessoa = {
    nome: 'Juquinha',
    idade: 23,
    estudandoProgracao: true
}

for(let chave in pessoa){
    console.log(`${chave} -> ${pessoa[chave]}`)
}