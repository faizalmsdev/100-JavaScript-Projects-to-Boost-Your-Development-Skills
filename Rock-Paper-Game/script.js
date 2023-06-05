// Select all buttons on the page
const buttons = document.querySelectorAll('button');

// Select elements to display the result, user score, and computer score
const resultEl = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

// Initialize player and system scores
let playerScore = 0;
let systemScore = 0;

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Call the playRound function with the player's choice and a random computer choice
    const result = playRound(button.id, computerPlay());

    // Update the result, user score, and computer score elements with the corresponding values
    resultEl.innerText = result;
    userScore.innerText = playerScore;
    computerScore.innerText = systemScore;
  });
});

// Generate a random computer choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// Determine the winner of a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection === "paper" &&
      computerSelection === "rock") ||
    (playerSelection === "scissors" &&
      computerSelection === "paper")
  ) {
    // Update scores based on the outcome
    playerScore++;
    systemScore--;
    return "Player Wins " + playerSelection + " beats " + computerSelection;
  } else {
    // Update scores based on the outcome
    playerScore--;
    systemScore++;
    return "You Lose " + computerSelection + " beats " + playerSelection;
  }
}
