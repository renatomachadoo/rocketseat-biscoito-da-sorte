const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnNewPhrase = document.querySelector(".screen2 button")

const cookieNew = document.querySelector("#imageCookie")
const pText = document.querySelector("#phrase-text")

const phrases = [
  "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
  "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
  "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
  "Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!",
  "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
  "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
  "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!"
]
//CALLBACKS
function handleNewCookieClick(event){
  event.preventDefault()
  toggleScreen()
  let displayPhrase = (Math.round(Math.random() * phrases.length))
  while (displayPhrase  < 0 || displayPhrase >= phrases.length){
    displayPhrase = (Math.round(Math.random() * phrases.length))
  }
  pText.innerText = phrases[displayPhrase]
}

function handleNewPhraseClick(event){
  event.preventDefault()
  toggleScreen()
}

// LISTENERS 
cookieNew.addEventListener("click", handleNewCookieClick)
btnNewPhrase.addEventListener("click", handleNewPhraseClick)
//FUNCTIONS
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

