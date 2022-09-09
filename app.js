let wins = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

// prompt for getting player's selection
function getplayerSelection() {
    return prompt("Please input your choice");
}

// randomly choose a choice for computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// a single round of rock paper scissors
function playSingleRound(playerSelection, computerSelection) {

    // case sensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // if tied
    if (playerSelection === computerSelection)
        return 0;
    
    // if player wins
    if (playerSelection === wins[computerSelection])
        return 1;
    
    // if player loses
    return -1;
}

// Main game loop
function game() {

    // welcome message
    console.log("Welcome to the game of rock paper Scissors!");
    console.log("First to 5 wins will win the game!")
    console.log("Please enter 'rock', 'paper' or 'scissors'. Otherwise you will lose!");
    console.log("Good luck!\n");   

    // count wins
    let playerWins = 0;
    let computerWins = 0;

    // loop until one wins five times
    while (playerWins < 5 && computerWins < 5) {

        // play one round
        let playerSelection = getplayerSelection();
        let computerSelection = getComputerChoice();


        let outcome = playSingleRound(playerSelection, computerSelection);

        // update win counts and output messages
        switch (outcome) {
            case 0:
                console.log("Tie");
                break;
            case 1:
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
                playerWins++;
                break;
            case -1:
                console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                computerWins++;
                break;
            default:
                console.log("Error, please contact admin");
        }

        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
    }

    // output message for final outcome
    let message = (playerWins === 5) ? "You Win!!!" : "You Lose..."
    console.log("Result of Rock Paper Scissors game:")
    console.log(message)
}


game();