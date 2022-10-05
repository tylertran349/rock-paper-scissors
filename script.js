let playerWinCount = 0;
let computerWinCount = 0;

const body = document.querySelector('body');
const rock = document.querySelector('#rock-btn');
const paper = document.querySelector('#paper-btn');
const scissors = document.querySelector('#scissors-btn');

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
        computerScorekeeper();
        winDetector()
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats scissors.";
        playerScorekeeper();
        winDetector()
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        result = "Tie!";
        winDetector()
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        result = "Tie!";
        winDetector()
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats scissors.";
        computerScorekeeper();
        winDetector()
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper.";
        playerScorekeeper();
        winDetector()
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        result = "Tie!";
        winDetector()
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper.";
        computerScorekeeper();
        winDetector()
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock.";
        playerScorekeeper();
        winDetector()
    }
    return result;
}

function winDetector() {
    if(playerWinCount === 5) {
        const winnerMessage = document.createElement('div');
        winnerMessage.textContent = "Congratulations, you won! Reload the page to play again.";
        body.appendChild(winnerMessage);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if(computerWinCount === 5) {
        const winnerMessage = document.createElement('div');
        winnerMessage.textContent = "The computer beat you. Reload the page to play again.";
        body.appendChild(winnerMessage);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

function playerScorekeeper() {
    playerWinCount++;
    document.getElementById("player-score-counter").innerHTML = "Player score: " + playerWinCount;
}

function computerScorekeeper() {
    computerWinCount++;
    document.getElementById("computer-score-counter").innerHTML = "Computer score: " + computerWinCount;
}

rock.addEventListener('click', () => {
    document.getElementById("result").innerHTML = "Result: " + (playRound("rock", getComputerChoice()));
});
paper.addEventListener('click', () => {
    document.getElementById("result").innerHTML = "Result: " + (playRound("paper", getComputerChoice()));
});
scissors.addEventListener('click', () => {
    document.getElementById("result").innerHTML = "Result: " + (playRound("scissors", getComputerChoice()));
});