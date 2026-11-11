# project related to DOM 
## project link
[Click here](https://stackblitz.com/edit/dom_project_chaiaurcode?file=index.html)

# solution code

## project 1

``` javascript 
console.log("Vidya sagar")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'gray') {
            body.style.backgroundColor = "red"
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = "yellow"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "white"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = "grey"
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = "blue"
        }
        
    })
})
```
## project 2 solution

```JavaScript
const form = document.querySelector('form')
// this usecase will give you empty
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height";
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please give a valid weight";
    } else {
      const bmi = (weight/((height*height)/10000)).toFixed(2)
    //   show the result
    result.innerHTML = `<span>${bmi}</span>`
    }

})
```
## project 3 solution
```javascript
const clock = document.getElementById('clock')

let date = new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
setInterval(function(){

},1000)
```

## project 4 solution
```JavaScript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const userSolt = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowerhigh = document.querySelector('.loOrHi')
const strtOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let palyGame = true

if (palyGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a  number more than 1')
    } else if (guess > 100) {
        alert('Please enter a valid number less than 100')
    } else{
        preGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over .Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
if(guess===randomNumber){
    displayMessage('You guessed it right')
    endGame()
} else if(guess < randomNumber){
    displayMessage('Number is TOOO low')
} else if(guess > randomNumber){
    displayMessage('Number is TOOO high')
}
}

function displayGuess(guess) {
userInput.value =''
userSolt.innerHTML += `${guess}`
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowerhigh.innerHTML = `<h2>${message}</h2>`
 }

function endGame() {
    userInput.value = ''
userInput.setAttribute(`disbled`, '')
p.classList.add("button")
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
strtOver.appendChild(p)
palyGame = false
newgame()
 }

function newgame() {

const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    preGuess = []
    numGuess = 1
        userSolt.innerHTML = ''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    strtOver.removeChild(p)
    palyGame = true
})
}

