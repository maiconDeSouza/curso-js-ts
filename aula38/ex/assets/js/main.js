const ps = document.querySelectorAll('p')

console.log(ps)

const bodyBackground = getComputedStyle(document.body).backgroundColor
for(let p of ps){
    p.style.backgroundColor = bodyBackground
    p.style.color = '#fff'
}



console.log(bodyBackground)