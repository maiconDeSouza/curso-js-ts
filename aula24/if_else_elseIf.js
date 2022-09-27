const hora = 15

if(hora > 23 || hora <= 0){
    console.log('Hora inválida!')
} else if(hora <= 11){
    console.log('Bom dia!')
} else if(hora <= 17){
    console.log('Boa Tarde!')
} else if(hora <= 23){
    console.log('Boa Noite!')
}