let myScore = 0;
let computerScore = 0;
let gameResult = '';


const rockbtn = document.querySelector('#rockButton');
const paperbtn = document.querySelector('#paperButton');
const scissorsbtn = document.querySelector('#scissorsButton');


const outcomeDiv = document.querySelector('#outcome');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Let's Play Rock Paper Scissors!";
outcomeDiv.appendChild(content);

rockbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(1,3);
    const playerSelection = "rock";
    const result = playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(result);
    outcomeDiv.textContent = `Outcome: ${result}`;
    runningTotal(result);
    gameOver(myScore, computerScore);
        
});

paperbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(1,3);
    const playerSelection = 'paper';
    const result = playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(result);
    outcomeDiv.textContent = `Outcome: ${result}`;
    runningTotal(result);
    gameOver(myScore, computerScore);
});

scissorsbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(1, 3);
    const playerSelection = 'scissors';
    const result = playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(result);
    outcomeDiv.textContent = `Outcome: ${result}`;
    runningTotal(result);
    gameOver(myScore, computerScore);
});

function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function playRound(pSelection, cSelection){
    if (pSelection === "rock" && cSelection === 1){
        //console.log("It's a tie.");
        return("It's a tie.");
    }else if (pSelection === "rock" && cSelection === 2){
        //console.log("You lose!");
        return("You lose!");
    }else if (pSelection === "rock" && cSelection === 3){
        //console.log("You win!");
        return("You win!");
    }
    else if (pSelection === "paper" && cSelection === 1){
        return("You win!");
    }else if (pSelection === "paper" && cSelection === 2){
        return("It's a tie.");
    }else if (pSelection === "paper" && cSelection === 3){
        return("You lose!");
    }
    else if (pSelection === "scissors" && cSelection === 1){
        return("You lose!");
    }else if (pSelection === "scissors" && cSelection === 2){
        return("You win!");
    }else if (pSelection === "scissors" && cSelection === 3){
        return("It's a tie.");
    }
};

function runningTotal(myResult){
    if (myResult == "It's a tie."){
        myScore +=0;
    }else if (myResult == "You lose!"){
        computerScore +=1;
    }else if (myResult == "You win!"){
        myScore +=1;
    }
    console.log(myScore);
    console.log(computerScore);
    //const paragraph = document.querySelector('p')
    const scoreBox = document.querySelector('#outcome');
    const scores = document.createElement('div')
    scores.classList.add('scores');
    scores.textContent = `You: ${myScore} points Computer: ${computerScore} points`;
    scoreBox.appendChild(scores);
}

function gameOver(myScore, computerScore){
    if (myScore === 5){
        console.log("You win the entire game!");
        const scoreBox = document.querySelector('#outcome');
        const finalScore = document.createElement('div');
        finalScore.classList.add('finalScore');
        finalScore.textContent = "You win the entire game!";
        scoreBox.appendChild(finalScore);

        
    }else if (computerScore === 5){
        console.log("The computer wins the entire game!");
        const scoreBox = document.querySelector('#outcome');
        const finalScore = document.createElement('div');
        finalScore.classList.add('finalScore');
        finalScore.textContent = "The computer wins the entire game! Better luck next time.";
        scoreBox.appendChild(finalScore);
    }
}

