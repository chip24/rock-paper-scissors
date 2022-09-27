function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

var computerSelection = getComputerChoice(1,3);
console.log(computerSelection);

var playerSelection = readLine("Type rock, scissors, or paper.");
console.log(playerSelection);

//function playRound(playerSelection, computerSelection)//

