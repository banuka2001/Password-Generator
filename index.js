let spaceEl = document.getElementById("space-el")
let genarateEl = document.getElementById("genarate-el")

function getRandomLetter() {
let letters = "abcdefghijklmnopqrstuvwxyz"
let letterIndex = Math.floor(Math.random()*letters.length)
return randomLetter = letters.charAt(letterIndex)
}

function getRandomNumber() {
return randomNumber = Math.floor(Math.random()*10)
}

function getRandomSymble () {
let symbles = "!@#$%^&*"
let symbleIndex = Math.floor(Math.random()*symbles.length)
return randomSymble = symbles.charAt(symbleIndex)
}

function passwordGenarate() {
    let result = ""
    result += getRandomLetter().toUpperCase()
    
    for ( let i = 0; i < 3; i++) {
        result += getRandomLetter()
    }
    for ( let k = 0; k < 2; k++) {
        result += getRandomSymble()
    }
    for ( let j = 0; j < 4; j++) {
        result += getRandomNumber()
    }
    return result
    console.log(result)
}

function genarate() {
    spaceEl.textContent = passwordGenarate()
}





