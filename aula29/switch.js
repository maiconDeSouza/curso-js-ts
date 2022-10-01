const diaSemana = new Date('1987-12-14').getDay()

console.log(diaSemana)

let diaSemanaString;

switch(diaSemana){
    case 0:
       diaSemanaString = `Domingo`
    break
    case 1:
       diaSemanaString = `Segunda-Feira`
    break
    case 2:
       diaSemanaString = `Terça-Feira`
    break
    case 3:
        diaSemanaString = `Quarta-Feira`
    break
    case 4:
        diaSemanaString = `Quinta-Feira`
    break
    case 5:
        diaSemanaString = `Sexta-Feira`
    break
    case 6:
        diaSemanaString = `Sábado-Feira`
    break
}

const objDatSemana = {
    '0': `Domingo`,
    '1': `Segunda-Feira`,
    '2': `Terça-Feira`,
    '3': `Quarta-Feira`,
    '4': `Quinta-Feira`,
    '5': `Sexta-Feira`,
    '6': `Sábado`
}

console.log(diaSemanaString)
console.log(objDatSemana[diaSemana])

function pegarDiaSemana(dia){
    switch(dia){
        case 0:
           return  `Domingo`
        
        case 1:
           return  `Segunda-Feira`
        
        case 2:
           return  `Terça-Feira`
        
        case 3:
            return  `Quarta-Feira`
        
        case 4:
            return  `Quinta-Feira`
        
        case 5:
            return  `Sexta-Feira`
        
        case 6:
            return  `Sábado-Feira`
        
    }
}

console.log(pegarDiaSemana(diaSemana))