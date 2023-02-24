const choices = ["rock", "paper", "scissors"];
const winners = [];

// let playerScore = 0; 
// let computerScore = 0;
//let playerSelection = "";
// let computerSelection = "";
// let  roundWinner = "";
 
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playerChoice () {
    let playerSelection = prompt("Lets play a game. Rock, Paper, or Scissors?");
    while (playerSelection == null) {
        playerSelection = prompt("Lets play a game. Rock, Paper, or Scissors?");
    }
    playerSelection = playerSelection.toLowerCase();
    let check = validateInput(playerSelection);
    while (check == false){
        prompt(
            "Please select a valid choice. Spelling needs to be correct."
            );
        while (playerSelection == null) {
            prompt("Lets play a game. Rock, Paper, or Scissors?");
        }
    playerSelection = playerSelection.toLowerCase();
    check = validateInput(playerSelection);
    }
  return playerSelection; 
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = verifyResults(computerSelection, playerSelection);
    console.log(winner); 
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function validateInput (choice){
     return choices.includes(choice);
};

function verifyResults(playerSelection,computerSelection){
    if(computerSelection === playerSelection){
        return "Tie";
    } else if(
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock") 
    ){ 
        return "Player Wins!";
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "rock" && playerSelection === "scissors") 
    ) {
        return "Computer Wins!"
    } else {
        return "Error"
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player Wins!").length;
    let comptuerWins = winners.filter((item) => item == "Comptuer Wins!").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", comptuerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner ,round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "won the round!")
    console.log("-----------------------");

}





