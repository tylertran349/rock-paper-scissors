let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice() {
    let randomNumber;
    let choice;
    randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    if(randomNumber == 1) {
        choice = "rock";
    } else if(randomNumber == 2) {
        choice = "paper";
    } else if(randomNumber == 3) {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if(playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock.";
        computerWinCount++;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats scissors.";
        playerWinCount++;
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        result = "Tie!";
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        result = "Tie!";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats scissors.";
        computerWinCount++;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper.";
        playerWinCount++;
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        result = "Tie!";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper.";
        computerWinCount++;
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock.";
        playerWinCount++;
    }
    return result;
}

function playerScorekeeper() {
    playerWinCount++;
}

function computerScorekeeper() {
    computerWinCount++;
}

function game() {
    let computerSelection;
    let playerSelection;

    // Reset computer/player win count before every round
    computerWinCount = 0; 
    playerWinCount = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Enter \'rock\', \'paper\', or \'scissors\' (without quotes).")
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerWinCount > computerWinCount) {
        console.log("Congratulations, you beat the computer!");
    } else {
        console.log("The computer beat you. :(");
    }
}

game();