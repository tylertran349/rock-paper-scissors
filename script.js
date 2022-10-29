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
        document.getElementById("computer-choice-icon").textContent = "✊";
    } else if(randomNumber == 2) {
        choice = "paper";
        document.getElementById("computer-choice-icon").textContent = "✋";
    } else if(randomNumber == 3) {
        choice = "scissors";
        document.getElementById("computer-choice-icon").textContent = "✌";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if(playerSelection === "rock" && computerSelection === "paper") {
        document.getElementById("result").textContent = "You lost!";
        result = "Paper beats rock";
        computerScorekeeper();
        winDetector();
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        document.getElementById("result").textContent = "You won!";
        result = "Rock beats scissors";
        playerScorekeeper();
        winDetector();
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        document.getElementById("result").textContent = "It's a tie!";
        result = "Rock ties with rock";
        winDetector();
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        document.getElementById("result").textContent = "It's a tie!";
        result = "Scissors ties with scissors";
        winDetector();
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        document.getElementById("result").textContent = "You lost!";
        result = "Rock beats scissors";
        computerScorekeeper();
        winDetector();
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("result").textContent = "You won!";
        result = "Scissors beats paper";
        playerScorekeeper();
        winDetector();
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        document.getElementById("result").textContent = "It's a tie!";
        result = "Paper ties with paper";
        winDetector();
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        document.getElementById("result").textContent = "You lost!";
        result = "Scissors beats paper";
        computerScorekeeper();
        winDetector();
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        document.getElementById("result").textContent = "You won!";
        result = "Paper beats rock";
        playerScorekeeper();
        winDetector();
    }
    return result;
}

function winDetector() {
    if(playerWinCount === 5) {
        // Make winner announcement overlay visible
        document.getElementById("winner-announcement-overlay").style.display = "flex";

        // Announce winner
        document.getElementById("winner-announcement").textContent = "You won!";

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if(computerWinCount === 5) {
        // Make winner announcement overlay visible
        document.getElementById("winner-announcement-overlay").style.display = "flex";

        // Announce winner
        document.getElementById("winner-announcement").textContent = "You lost :("

        // Disable buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

// If player wins round, increment player score and update player score text
function playerScorekeeper() {
    playerWinCount++;
    document.getElementById("player-score-counter").textContent = "Player: " + playerWinCount;
}

// If computer wins round, increment computer score and update computer score text
function computerScorekeeper() {
    computerWinCount++;
    document.getElementById("computer-score-counter").textContent = "Computer: " + computerWinCount;
}

// Event listeners for rock, paper, and scissors buttons call playRound() function to update result, result explanation, and player/computer choice icon based on the round that was just played
rock.addEventListener('click', () => {
    document.getElementById("result-explanation").textContent = playRound("rock", getComputerChoice());
    document.getElementById("player-choice-icon").textContent = "✊";
});
paper.addEventListener('click', () => {
    document.getElementById("result-explanation").textContent = playRound("paper", getComputerChoice());
    document.getElementById("player-choice-icon").textContent = "✋";
});
scissors.addEventListener('click', () => {
    document.getElementById("result-explanation").textContent = playRound("scissors", getComputerChoice());
    document.getElementById("player-choice-icon").textContent = "✌";
});