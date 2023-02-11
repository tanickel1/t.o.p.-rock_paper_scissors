const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0; 
let computerScore = 0;
let playerSelection = " ";
let  roundWinner = " ";
 
function game(){
    for(let i = 0, i <= 5, i++){
        round()
    }
}

function playerChoice () {
    let playerSelection = prompt("Lets play a game. Rock, Paper, or Scissors?");
    while (playerSelection = null) {
        playerSelection = prompt("Lets play a game. Rock, Paper, or Scissors?")
    }
    playerSelection = playerSelection.toLowerCase();
    let check = validateInput(playerSelection);
    while (check == false){
        prompt(
            "Please select a valid choice. Spelling needs to be correct."
            );
    input = input.toLowerCase();
    check = validateInput(input);
    }
  return playerSelection; 
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function round() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = verifyResults();
}

function validateInput (choice){
    if choices.includes(choice) {
        return true;
    }
};

function verifyResults(playerSelection,computerSelection){
    if(computerSelection === playerSelection){
        return "Tie";
    } else if(computerSelection === "Rock" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Rock") { 
            return "Player Wins!";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper") ||
        (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "Computer Wins!"
    } else {
        return "Error"
    }
};

game();




