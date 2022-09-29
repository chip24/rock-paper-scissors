function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

var computerSelection = getComputerChoice(1,3);
console.log(computerSelection);

var playerChoice = prompt("Type rock, scissors, or paper.");
console.log(playerChoice);
var playerSelection = playerChoice.toLowerCase();

console.log(playerSelection);

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === 1){
        return("It's a tie. Rock equals rock.");
    }else if (playerSelection === "rock" && computerSelection === 2){
        return("You lose! Paper beats rock.");
    }else if (playerSelection === "rock" && computerSelection === 3){
        return("You win! Rock beats scissors.");
    }
    else if (playerSelection === "paper" && computerSelection === 1){
        return("You win! Paper beats rock.");
    }else if (playerSelection === "paper" && computerSelection === 2){
        return("It's a tie. Paper equals paper.");
    }else if (playerSelection === "paper" && computerSelection === 3){
        return("You lose! Scissors beat paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === 1){
        return("You lose! Rock beats scissors.");
    }else if (playerSelection === "scissors" && computerSelection === 2){
        return("You win! Scissors beat paper.");
    }else if (playerSelection === "scissors" && computerSelection === 3){
        return("It's a tie. Scissors equals scissors.");
    }


}

alert(playRound(playerSelection, computerSelection));

//function game() {
    //for (let i = 0; i < 5; i++) {
        //playRound(i);
        
    //}
//}

//game()




