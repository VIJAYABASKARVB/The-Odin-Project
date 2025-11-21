function getComputerChoice(){
    let randomNumber = Math.random();

    if(randomNumber<=0.33){
        return 'rock';
    }
    else if(randomNumber>0.33 && randomNumber<=0.66){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your Move Here");

    if (!humanChoice) return; // handle cancel

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert('Enter a Valid Input');
        return null;
    }
}

function playGame() {

    let humanScore = 0;    
    let computerScore = 0;  

    function playRound(humanChoice, computerChoice) {

        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            return "You Won!";
        }
        else if (
            (computerChoice === 'rock' && humanChoice === 'scissors') ||
            (computerChoice === 'scissors' && humanChoice === 'paper') ||
            (computerChoice === 'paper' && humanChoice === 'rock')
        ) {
            computerScore++;
            return "You Lose!";
        }
        else {
            return "It's a Tie!";
        }
    }


    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (!humanChoice) {
            console.log("Round skipped due to invalid input.");
            continue;
        }

        console.log(`Round ${i}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
        console.log("-----------------------");
    }

    // Final result
    console.log("Final Result:");
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💀 You lost the game!");
    } else {
        console.log("🤝 The game is a tie!");
    }
}


// Start the game
playGame();