let isValid = true

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

let i = 0

while(isValid){
    const valor = random(10, 60)
    console.log(`${++i} -> ${valor}`)

    if(valor === 18){
        isValid = false
    }
}

console.log('fim...')