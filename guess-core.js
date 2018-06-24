'use strict';

/* core code */

let computerguess = undefined
let k = 0
let computerlow = 1
let computerhigh = 100 
let userresponse = ''

function gameStart() {
    say("The game has begun!\nThink of a number between 0-100")
    computerGuess()
}



function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function handleInput(input) {
    clear();
    userresponse = input.toString().trim();
    verifyUserResponse();
}


function computerGuess(){
    computerguess = getRndInt(computerlow, computerhigh)
    say ("Is it " + computerguess + "?")
    getUserResponse()
}

function verifyUserResponse(){
    if (userresponse === "h") {
    computerlow = computerguess + 1
    say ("Higher...")
    computerGuess()
    }

    if (userresponse === "l") {
    computerhigh = computerguess - 1
    say ("Lower...")
    computerGuess()
    }

    if (userresponse === "y") {
    say ("Your number is " + computerguess + '!')
    exit()
    }
}



module.exports = {
    handleInput: handleInput,
    gameStart: gameStart
}