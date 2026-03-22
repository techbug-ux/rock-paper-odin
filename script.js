console.log("Hello, World")

function getComputerChoice(num) {
    if (Math.floor(Math.random() * num) == 0){
        return "rock";
    } else if (Math.floor(Math.random() * num) == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice(3))

function getHumanChoice() {
    choice = prompt("Rock, paper, scissors?");
    console.log(choice);
}

getHumanChoice();