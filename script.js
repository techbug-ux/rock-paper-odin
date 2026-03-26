// HELLO WORLD TEST
//Step 1: Print Hello World in console
console.log("Hello World");

//Step 2: create function getComputerChoice
//it must return "rock", "paper", "scissors"
//math.random is to select three random choices

function getComputerChoice() {
    //make condtional to return each output
    if (Math.floor(Math.random() * 3) == 0 ) {
        return "rock";
    }
    else if (Math.floor(Math.random() * 3) == 1 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//testing with console log for function getComputerChoice
console.log("Computer Choice " + getComputerChoice());

//human choice then return there choice
function getHumanChoice() {
    choice = prompt("Rock, paper or Scissors?");
    choiceFixed = choice.trim().toLowerCase();
    return choiceFixed;
}
// TESTING WITH CONSOLE TO SEE IF humanchoice function works 
console.log("Human Choice " + getHumanChoice());