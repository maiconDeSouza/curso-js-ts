function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

let i = 0

while(true){
    const valor = random(10, 60)
    console.log(`${++i} -> ${valor}`)

    if(valor === 18){
        break
    }
}

console.log('fim...')
console.log('inicio...')

for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(`${i}`)
}