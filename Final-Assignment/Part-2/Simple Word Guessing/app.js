const arrAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const arrWord = ['snake', 'cat', 'bear', 'dog', 'elephant', 'giraffe', 'spider', 'camel', 'fish', 'donkey', 'horse']
let container = document.querySelector('.container')
let alphabetsContainer = document.querySelector('.alphabets-container')
let tries = 5
let gameOver = document.querySelector(".end-text")
let endContainer = document.querySelector(".end-container")
let background = document.querySelector(".background")
let arrGuessedWord =[]
let numOfTries = document.querySelector(".tries")

function displayAlphabets(){
    for(i = 0; i < arrAlphabets.length; i++){
        alphabetsContainer.innerHTML += `<p class="alphabet">${arrAlphabets[i]}</p>`
    }

    numOfTries.innerHTML = `Chances: ${tries}`
}
window.addEventListener('load', displayAlphabets)

function getWord(){
    let index = Math.floor(Math.random() *11)
    let word = arrWord[index]
    console.log(word)

    //display on screen as "_"
    let arrLetter = word.split('')
    let arrScreen = []
    console.log(arrLetter)
    for (let i = 0; i < arrLetter.length; i++) {
        arrScreen[i] = "_"
        container.innerHTML += `<li class="letter">${arrScreen[i]}</li>`
    }
    return outcome = word.split("")
}


let arrLetter = getWord()
console.log(arrLetter)


document.addEventListener('keydown', (e) => {
    tries = tries - 1
    
    if(tries >= 0){
        guessWord(e.key)
        addUsed(e.key)
        console.log(tries)
    numOfTries.innerHTML = `Chances: ${tries}`      
    }
    
    else
    gameEnd()

})


function guessWord(key){
    let realLetter = document.querySelectorAll(`.letter`)
    for(i = 0; i < arrLetter.length; i++){
        
        if(key === arrLetter[i]){
            realLetter[i].textContent = arrLetter[i].toLocaleUpperCase()
            arrGuessedWord[i] = arrLetter[i]
            tries = tries + 1
        }
    }
    let guessedWord = arrGuessedWord.join("")
    if(guessedWord === arrLetter.join("")){
        console.log("CONGRATS!")
        gameWin()
    }
}



function addUsed(key){
    let alphabet = document.querySelectorAll('.alphabet')
    
    for(i = 0; i < alphabet.length; i++){
        if(key.toLocaleUpperCase() === alphabet[i].textContent) {
            alphabet[i].classList.add("used")
        }
    }
}

function gameWin(){
    gameOver.textContent = "CONGRATULATIONS!"
    background.classList.add("end")
    
}

function gameEnd(){
    gameOver.textContent = `
        GAME OVER!
        The answer is ${arrLetter.join("").toLocaleUpperCase()}
    `
    background.classList.add("end")
    
}