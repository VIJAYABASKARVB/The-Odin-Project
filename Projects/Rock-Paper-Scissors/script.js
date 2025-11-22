let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) return "rock";
    else if (randomNumber <= 0.66) return "paper";
    return "scissors";
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    let roundResult = "";

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        roundResult = `You Win! ${humanChoice} beats ${computerChoice}`;
    } 
    else if (humanChoice === computerChoice) {
        roundResult = `It's a Tie! You both chose ${humanChoice}`;
    } 
    else {
        computerScore++;
        roundResult = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    resultDiv.textContent = roundResult;
    scoreDiv.textContent = `Score → You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent = "🎉 You won the game!";
        disableButtons();
    } 
    else if (computerScore === 5) {
        resultDiv.textContent = "💀 Computer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
