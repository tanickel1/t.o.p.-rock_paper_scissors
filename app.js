const choices = ["rock", "paper", "scissors"];
const winners = [];
 
function resetGame(){
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.disple = "none";

};

function game() {
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) => 
    img.addEventListener((click), () => {
        if(img.id){
            playRound(img.id)
        }
    })) 

};

function checkWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    return Math.max(pWinCount, cWinCount)

}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    const ties = winners.filter((item) => item == "tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score: ${ties}`;
}
    

function playerChoice (playerChoice) {
    const computerChoice = computerSelect();
    const winner = verifyResults(playerChoice, computerChoice)
  return playerSelection; 
}

//update the dom with computer selection
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(round) {
    if (wins >= 5){
        return
    }
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = verifyResults(computerSelection, playerSelection);
    logRound(playerSelection, computerSelection, winner, round)
}


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
}

function logRound(playerChoice, computerChoice, winner ,round) {

}

game();



