
const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function round(player, computer) {
  computer = getComputerChoice();
  const answer = prompt('Rock Paper or Scissors')
  player = answer[0].toUpperCase() + answer.slice(1)
  console.log(`The player's choice: '${player}' vs The computer's choice: '${computer}'`)
  if(player === 'Rock') {
    if(computer === 'Paper') console.log('Computer Wins')
    else if (computer === 'Scissors') console.log('Player Wins')
  }
  if(player === 'Paper') {
    if(computer === 'Scissors') console.log('Computer Wins')
    else if (computer === 'Rock') console.log('Player Wins')
  }
  if(player === 'Scissors') {
    if(computer === 'Rock') console.log('Computer Wins')
    else if (computer === 'Paper') console.log('Player Wins')
  } else if (player === computer) console.log('tie')
}
round()