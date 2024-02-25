const h4_1 = document.getElementById('h4-1')
const h4_2 = document.getElementById('h4-2')
const h4_3 = document.getElementById('h4-3')
const h1_h1 = document.getElementById('h1-h1')
setTimeout(() => {
    h4_1.style.display = 'block'
    h4_1.style.animation = 'typing 2s steps(20)'
    //h4_1.style.border = 'none'
    h1_h1.style.border= 'none'
} ,3000)
setTimeout(() => {
    h4_2.style.display = 'block'
    h4_2.style.animation = 'typing 2s steps(20)'
    h4_1.style.border = 'none'
} ,5000)
setTimeout(() => {
    h4_3.style.display = 'block'
    h4_3.style.animation = 'typing 2s steps(20),blink 0.9s infinite'
    h4_2.style.border = 'none'
    //h4_3.style.animation = 'blink 0.5s infinite'
} ,6500)

const swipe = document.querySelector('.swipe')

setInterval(() => swipe.classList.add('addAnimeToSwipe') , 9000)
