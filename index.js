const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLenght = 15
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")


function getRandomcharOne() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPasswordOne() {
    let randomPassOne = ""
    for (i = 0; i < passwordLenght; i++) {
        randomPassOne += getRandomcharOne()
    }
    return randomPassOne
}

function getRandomcharTwo() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
function randomPasswordTwo() {
    let randomPassTwo = ""
    for (i = 0; i < passwordLenght; i++) {
        randomPassTwo += getRandomcharTwo()
    }
    return randomPassTwo
}


function generate1() {
    return password1El.textContent =  randomPasswordOne()
}
function generate2() {
    return password2El.textContent =  randomPasswordTwo()
}