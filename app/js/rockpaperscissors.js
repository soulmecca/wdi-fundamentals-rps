

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    if (move === null){
        return getInput();
    }else {
        return move
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null){
        return randomPlay();
    }else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player'
    } else if(playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer'
    }else if(playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer'
    }else if(playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player'
    }else if(playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player'
    }else if(playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer'
    }else if( (playerMove === 'rock' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'paper'))  {
        winner = 'tie'
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 1;
    var computerWins = 1;
    debugger
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (computerWins <= 4 && playerWins <= 4) {

       var player = getPlayerMove(move = null);
       var computer = getComputerMove(move = null);

       console.log("Computer gets " + computer);
       var result = getWinner(player,computer);

       console.log("The result is " + result);

       if(result === 'player') {
         playerWins += 1;
       }else if(result === 'computer') {
         computerWins += 1;
       }
    }
    return [playerWins, computerWins];
}

