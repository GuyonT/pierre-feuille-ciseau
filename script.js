function getComputerChoice () {
let choicesArray = ['rock', 'paper', 'scissors']; 
let computerChoice = choicesArray[(Math.random() * choicesArray.length) | 0] //get a random value from the array
return computerChoice ;
}

console.log('the computer choice is ' + getComputerChoice());

function getUserChoice () {
let userChoice = prompt ("Choose between rock, paper and scissors", 'rock');; //get choice from the User

function checkInput () {
    if (!userChoice) { //check is user cancelled or empty input
    alert("We don't accept leavers here");
} else {
    userChoice = userChoice.toLowerCase();}
}

checkInput();

while (userChoice !== "rock" && userChoice !=="paper" && userChoice !=="scissors") { //check if user made a correct input
    alert('This is an invalide entry');
    userChoice = prompt ("Choose between rock, paper and scissors", 'rock');
    checkInput();
    continue
}
    return userChoice;
}

let userScore = 0
let computerScore = 0

function playRound (userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        confirm('this is a draw!');
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        userScore++ ;
        confirm("yes, rock for the win!");
    } else if (userChoice == "paper" && computerChoice == "rock") {
        userScore++ ;
        confirm("yes, paper for the win!");
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        userScore++ ;
        confirm("yes, scissors for the win!");
    } else {
        computerScore++ ;
        confirm("you're a looser lol"); 
    }
}

do {
    const computerSelection = getComputerChoice();
    const userSelection = getUserChoice();
    alert('you choose ' + userSelection + ' and the computer choose '+ computerSelection);
    playRound(userSelection, computerSelection);
    alert('now your score is ' + userScore + ' and the computer score is ' + computerScore);
    console.log('computer score is ' + computerScore);
    console.log ('user score is ' + userScore);
    if (userScore == 5) {
        alert('You won the game bro'); break
    } else if (computerScore == 5) {
        alert('You lost the game bro'); break
    }
} while (userScore <= 5 || computerScore <= 5);



//Declare a human score
    //start it from 0
//Declare a computer score
    //start it from 0

//Declare a function playRound
    //use both variables computerChoice and userChoice 
        //if userChoice == computerChoice, don't do anything
        //if userChoice = "rock" and computerChoice = "scissors", increase userScore by 1
        //if userChoice = "paper" and computerChoice = "rock", increase userScore by 1
        //if userChoice = "scissors" and computerChoice "paper", increase userScore by 1
        // for anything else, increase computerScore by 1

//Create a loop that goes until userScore or computerScore = 5
    //if userScore = 5, print a message to say user won
    //if computerScore = 5, print a message to say user lost
    //reset everything to start a new game
