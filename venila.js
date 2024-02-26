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

//for scroll transition
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal)
  
  const skills = [{L:'CSS',P:'75%'},{L:'JAVASCRIPT',P:'70%'},{L:'SASS',P:'70%'},{L:'BOOTSTARP',P:'60%'},{L:'REACT JS',P:'50%'},{L:'PYTHON',P:'65%'},{L:'NODE JS',P:'50%'}]
  
  const sec_b = document.getElementById('sec-b')
  
  skills.map((e) => {
      const newskill = document.createElement('div')
      newskill.innerHTML = `<b>${e.L}</b>
              <div class="inbox " style="width:${e.P};" >${parseInt(e.P) + 25}%&nbsp;</div>`
      
      newskill.classList.add('outbox')
      sec_b.append(newskill)
  })
  

  const inbox = document.getElementById('inbox')
