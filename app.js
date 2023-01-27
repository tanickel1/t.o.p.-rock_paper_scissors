//for the user choices, I originally tried to make them each seperate variable. 
//After consulting a more experienced developer, it made more sense to make them a single array. 

const userChoices = ["rock", "paper", "scissors"]; 


let userSelection = prompt("Want to play a game? Rock, Paper or Scissors?");

if(userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
    console.log(userSelection)
} else {
    console.log("Invalid choice, try again.");
}