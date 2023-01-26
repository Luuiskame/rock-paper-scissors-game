// first of all we want to create an interaction between our game's components
const buttons = document.querySelectorAll(".button")
const gameCointainer = document.querySelector(".game-container") 
const gameResult = document.querySelector(".result-container")
const scoreEl = document.getElementById("score-number")
const winnerText = document.getElementById("winner-text")
const playAgain = document.querySelector(".winner-container")
const playAgainBtn = document.getElementById("winner-btn")
const user_select = document.getElementById("user_select")
const machine_select = document.getElementById("machine_select")
const choices = ["paper", "scissors", "rock"]
let winnerMessage = ""
let userChoice = undefined
let score = 0
let winner = false

function randomChoice(){
    return choices[Math.floor(Math.random()* choices.length)]
}

buttons.forEach( (button =>{
    button.addEventListener("click", function (){
        userChoice = button.getAttribute("data-choice")
        
        checkWinner()
    })
}))

function checkWinner() {
    const computerChoice = randomChoice()

    // updating the Images
    updateSelection(user_select, userChoice)
    updateSelection(machine_select, computerChoice)

    if (userChoice === computerChoice) {
        winnerMessage += "it's a draw"
        winnerText.innerHTML = winnerMessage
        renderResult()
        console.log("draw")
    
    } else if (userChoice === "paper" && computerChoice === "rock" || userChoice ===    "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper") {
        updateScore(+1)
        winnerMessage += "you won"
        winnerText.innerHTML = winnerMessage
        renderResult()
        userChoice.classList.add("winner")
        console.log("winner")
   
    } else {
        updateScore(-1)
        winnerMessage += "you lose"
        winnerText.innerHTML = winnerMessage
        renderResult()
        computerChoice.classList.add("winner")
        console.log("looser")
    }
}

function updateScore(value){
    score += value

    scoreEl.innerText = score
}

const showAnimation = document.querySelector(".picked__up__image-container")
function renderResult(){
    gameCointainer.classList.toggle("remove")
    gameResult.classList.toggle("show")
    playAgain.classList.toggle("show")
    winnerMessage  = ""
}

playAgainBtn.addEventListener("click", function (){
    gameCointainer.classList.remove("remove")
    gameResult.classList.remove("show")
    playAgain.classList.remove("show")
})

function updateSelection(selectionEl, choice){
   selectionEl.classList.remove("paper-container")
   selectionEl.classList.remove("rock-container")
   selectionEl.classList.remove("scissors-container")

   
   const img = selectionEl.querySelector("img")
   selectionEl.classList.add(`${choice}-container`)
   img.src = `/rock-paper-scissors-master/images/icon-${choice}.svg`
   img.alt = choice
}

// here we're gonna add a evenlistener to the rules btn
const rulesBtn = document.getElementById("rules-btn");
const rules = document.querySelector(".rules")
rulesBtn.addEventListener("click", function(){
    rules.classList.add("show")
})

// here we're gonna give it functionality to our closeBtn
const closeBtn = document.querySelector(".rules-out")
closeBtn.addEventListener("click", function(){
    rules.classList.remove("show")
})

function winnerEffect() {
}





 

