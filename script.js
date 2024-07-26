function getComputerChoice() {
	let choicesArray = ['rock', 'paper', 'scissors'];
	let computerChoice = choicesArray[(Math.random() * choicesArray.length) | 0] //get a random value from the array
	return computerChoice;
}
let userScore = 0
let computerScore = 0

function playRound(userChoice, computerChoice) {
	if (userChoice == computerChoice) {
		roundResult.textContent = ("You chose " + userChoice + " and the computer chose " + computerChoice + ', so this is a draw!');
	} else if (userChoice == "rock" && computerChoice == "scissors") {
		userScore++;
		roundResult.textContent = ("You chose " + userChoice + " and the computer chose " + computerChoice + ", yes, rock for the win!");
	} else if (userChoice == "paper" && computerChoice == "rock") {
		userScore++;
		roundResult.textContent = ("You chose " + userChoice + " and the computer chose " + computerChoice + ", yes, paper for the win!");
	} else if (userChoice == "scissors" && computerChoice == "paper") {
		userScore++;
		roundResult.textContent = ("You chose " + userChoice + " and the computer chose " + computerChoice + ", yes, scissors for the win!");
	} else {
		computerScore++;
		roundResult.textContent = ("You chose " + userChoice + " and the computer chose " + computerChoice + ", so you're a looser lol");
	}
	scoreInfo.textContent = 'now your score is ' + userScore + ' and the computer score is ' + computerScore;
}
const container = document.querySelector("#container");
const roundResult = document.createElement("p"); //declare <p> for roundResult
roundResult.classList.add("roundResult");
container.appendChild(roundResult);

const scoreInfo = document.createElement("p"); //declare <p> for scoreInfo
scoreInfo.classList.add("scoreInfo");
container.appendChild(scoreInfo);

const buttons = document.querySelectorAll(".choice-button"); //declaration of buttons for user input
const choiceButton = document.querySelector(".choice-button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let computerSelection = getComputerChoice();
		playRound(button.id, computerSelection); //play a round on each click
		if (userScore == 5) {
			gameResult.textContent = ('You won the game bro');
			buttons.forEach((button) => {
				button.disabled = true;
			});
			resetGame();
		} else if (computerScore == 5) {
			gameResult.textContent = ('You lost the game bro');
			buttons.forEach((button) => {
				button.disabled = true;
			});
			resetGame();
		}
	});
})

const gameResult = document.createElement("h4");
gameResult.classList.add("gameResult");
container.appendChild(gameResult);

function resetGame() {
	const resetContainer = document.querySelector("#resetContainer");

	const resetPrompt = document.createElement("p");
	resetPrompt.classList.add("resetPrompt");
	resetPrompt.textContent = ("Do you wanna play again ?");
	resetContainer.appendChild(resetPrompt);
    
	buttons.forEach((button) => {
		button.addEventListener("click", () => {})
	})
	const buttonYes = document.createElement("button");
	buttonYes.classList.add("buttonYes")
	buttonYes.textContent = ("YES");
	resetContainer.appendChild(buttonYes);

	buttonYes.onclick = () => {
		userScore = 0;
		computerScore = 0;
		roundResult.textContent = ("");
		scoreInfo.textContent = ("");
		gameResult.textContent = ("");
		resetContainer.textContent = ("");
		buttons.forEach((button) => {
			button.disabled = false;
		})
	}
}



