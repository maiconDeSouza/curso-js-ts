// const objDay = {
//     '0': `Domingo`,
//     '1': `Segunda-Feira`,
//     '2': `Terça-Feira`,
//     '3': `Quarta-Feira`,
//     '4': `Quinta-Feira`,
//     '5': `Sexta-Feira`,
//     '6': `Sábado`
// }

// const objMonth = {
//     '0': `Janeiro`,
//     '1': `Fevereiro`,
//     '2': `Março`,
//     '3': `Abril`,
//     '4': `Maio`,
//     '5': `Junho`,
//     '6': `Sábado`,
//     '7': `Julho`,
//     '8': `Agosto`,
//     '9': `Setembro`,
//     '10': `Outubro`,
//     '11': `Novembro`,
//     '12': `Dezembro`
// }
class OrganizaData{
    constructor(){
        this.data = new Date()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeStyle: 'short' }
        this.novo = this.data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'medium'})
    }

    day(){
        const day = this.data.getDay()
        return objDay[day]
    }
    month(){
        const month = this.data.getMonth()
        return objMonth[month]
    }
    date(){
        return this.data.getDate()
    }
    year(){
        return this.data.getFullYear()
    }
    horas(){ 
        return this.data.getHours() > 9 ? this.data.getHours() : `0${this.data.getHours()}`
    }
    minutos(){
        return this.data.getMinutes() > 9 ? this.data.getMinutes() : `0${this.data.getMinutes()}`
    }

}


function init(){
    const p = document.querySelector('p')
    const now = new OrganizaData()
    // const texto = document.createTextNode(`${now.day()}, ${now.date()} de ${now.month()} de ${now.year()}, ${now.horas()}:${now.minutos()}`)
    const texto = document.createTextNode(now.novo)
    p.appendChild(texto)
}
init()


