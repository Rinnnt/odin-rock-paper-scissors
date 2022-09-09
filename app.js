let wins = {
    "Rock": "Paper",
    "Paper": "Scissors",
    "Scissors": "Rock"
}

// randomly choose a choice for computer
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// a single round of rock paper scissors
function playSingleRound(playerSelection, computerSelection) {
    // if tied
    if (playerSelection === computerSelection)
        return "Tie!";
    
    // if player wins
    if (playerSelection === wins[computerSelection])
        return "You Win! " + playerSelection + " beats " + computerSelection;
    
    // if player loses
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}
