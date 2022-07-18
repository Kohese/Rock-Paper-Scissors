const button = document.querySelectorAll('button')
button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let playerChoice = e.target.value
  })
})
const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function win() {
  return computerScore > playerScore ? 'The Computer Wins' : 'The Player Wins'
}

function round(player, computer) {
  
}
// round()