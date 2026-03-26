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


//human choice then return there choice
function getHumanChoice() {
    choice = prompt("Rock, paper or Scissors?").trim().toLowerCase();
    return choice;
}


function playGame(rounds) {
    //Collecting scores
    let humanScore = 0;
    let computerScore = 0;

//FUNCTION FOR EACH ROUND
    function playRound(humanChoice, computerChoice) {
        //make a conditional for each possibities
        if (humanChoice == computerChoice) {
        return console.log("Its a tie!");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            return (console.log("You win! Rock beats Scissors."), humanScore += 1);
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            return (console.log("You win! Paper beats Rock."), humanScore += 1);
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            return (console.log("You win! Scissors beats Paper."), humanScore += 1);
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            return (console.log("You Lose! Rock beats Scissors."), computerScore += 1);
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            return (console.log("You Lose! Paper beats Rock."), computerScore += 1);
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            return (console.log("You Lose! Scissors beats Paper."), computerScore += 1);
        }
    }

    let i = 0;

    while(i != rounds){
        const humanSelection = getHumanChoice();
        // TESTING WITH CONSOLE TO SEE IF humanchoice function works 
        console.log("Human Choice " + humanSelection);

        const computerSelection = getComputerChoice();
        //testing with console log for function getComputerChoice
        console.log("Computer Choice " + computerSelection);

        playRound(humanSelection, computerSelection);
        i++;
    }

    if (humanScore > computerScore){
        console.log("You WIN!");
    }
    else if (computerScore > humanScore){
        console.log("Computer WINS");
    }
    else {
        console.log("Its a tie!")
    }
    }

playGame(5);