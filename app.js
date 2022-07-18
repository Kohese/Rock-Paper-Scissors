const button = document.querySelectorAll("button");
const playerBox = document.getElementById("player-box");
const cpuBox = document.getElementById("computer-box");
let results = document.getElementById("results-box");
let plScore = 0;
let cpuScore = 0;

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let playerChoice = e.target.value;
    round(playerChoice, getComputerChoice());
    win(plScore, cpuScore);
  });
});
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function win(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    return computerScore > playerScore
      ? (results.textContent = "The Computer Wins")
      : (results.textContent = "The Player Wins");
  }
}
function round(player, computer) {
  if (plScore === 5 || cpuScore === 5) return;
  switch (true) {
    case player === computer:
      results.textContent = "hmmm it's a tie";
      break;
    case player == "Rock" && computer === "Scissors":
    case player === "Paper" && computer === "Rock":
    case player === "Scissors" && computer === "Paper":
      plScore++;
      playerBox.textContent = plScore;
      results.textContent = `Player wins`;
      break;
    case player == "Rock" && computer === "Paper":
    case player === "Paper" && computer === "Scissors":
    case player === "Scissors" && computer === "Rock":
      cpuScore++;
      cpuBox.textContent = cpuScore;
      results.textContent = `Computer wins`;
      break;
  }
}
