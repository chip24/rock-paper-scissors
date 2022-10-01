function game(){
    let gameResult = '';
    let myScore = 0;
    let playerChoice = prompt("Type rock, scissors, or paper.");
    console.log(playerChoice);
    let playerSelection = playerChoice.toLowerCase();
    console.log(playerSelection);
    let computerSelection = getComputerChoice(1,3);
    console.log(computerSelection);

    let myResult = playRound(playerSelection, computerSelection)
        if (myResult == "It's a tie."){
            myScore +-0;
        }if (myResult == "You lose!"){
            myScore -+1;
        }if (myResult == "You win!"){
            myScore =+1;
        }if (myScore > 0) {
            gameResult = "You win the game!"
        }if (myScore < 0){
            gameResult = "You lose the game."
        }
        if (myScore == 0) {
            gameResult = "It's a tie."
        }
        console.log(gameResult);
        return gameResult;


    };
    
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === 1){
        return("It's a tie.");
    }else if (playerSelection === "rock" && computerSelection === 2){
        return("You lose!");
    }else if (playerSelection === "rock" && computerSelection === 3){
        return("You win!");
    }
    else if (playerSelection === "paper" && computerSelection === 1){
        return("You win!");
    }else if (playerSelection === "paper" && computerSelection === 2){
        return("It's a tie.");
    }else if (playerSelection === "paper" && computerSelection === 3){
        return("You lose!");
    }
    else if (playerSelection === "scissors" && computerSelection === 1){
        return("You lose!");
    }else if (playerSelection === "scissors" && computerSelection === 2){
        return("You win!");
    }else if (playerSelection === "scissors" && computerSelection === 3){
        return("It's a tie.");
    }
}

function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}








for (let i = 0; i <5; i++) {
    console.log("Round # " + i);
    game()
}