const choices = ["rock", "paper", "scissors"];
let winners = [];
 
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
    img.addEventListener(('click'), () => {
        if(img.id){
            playRound(img.id)
        }
    })) 

};

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5){
        return
    }
    
    const computerSelect = computerChoice();

    const winner = checkWinner(playerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(computerChoice, playerChoice, winner);
    wins = checkWins();
    if(wins ==5){
        displayEnd();
    }
};

function playerChoice (playerChoice) {
    const computerChoice = computerSelect();
    const winner = verifyResults(playerChoice, computerChoice)
  return playerSelection; 
}



function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `The Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
};

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the Round.";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "The computer won the Round";
    } else {
        document.querySelector(".winner").textContent = "The round was a tie.";
    }
}



function tallyWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    const ties = winners.filter((item) => item == "tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score: ${ties}`;
};


//update the dom with computer selection
function computerSelect() {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");
    }, 700);

    return choice;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    return Math.max(pWinCount, cWinCount)

}


function checkWinner (playerSelection,computerSelection){
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

function setWins (){
    const pWinCount = winners.filter((item) => item == "Player Wins!").length;
    const comptuerWins = winners.filter((item) => item == "Comptuer Wins!").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

game();