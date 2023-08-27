let randomNum=(parseInt(Math.random()*100+1))
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numguess=1;

let playGame=true;

if(playGame)
{
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else if(guess<1||guess>100){
        alert('enter the number within range')
    }
    else{
        prevGuess.push(guess)
        if(numguess>=10){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNum}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess===randomNum){
        displayMessage("You guessed it right")
        endGame()
    }
    else if(guess<randomNum){
        displayMessage("number is too low")
    }
    else if(guess>randomNum){
        displayMessage("number is too high")
    }
}

function displayGuess(guess)
{
    userInput.value=""
    guessSlot.innerHTML+=`${guess}, `
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}

function displayMessage(message)
{
    lowOrHigh.innerHTML=`<h1>${message}</h1>`
}

function endGame()
{
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNum=(parseInt(Math.random()*100+1))
        prevGuess=[]
        numguess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })
}


