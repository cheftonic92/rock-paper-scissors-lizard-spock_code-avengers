import './style.css'

const rock     = { name: 'rock',     enemieList: ['paper',   'spock'] }
const paper    = { name: 'paper',    enemieList: ['scissors','lizard'] }
const scissors = { name: 'scissors', enemieList: ['rock',    'spock'] }
const lizard   = { name: 'lizard',   enemieList: ['scissors','rock'] }
const spock    = { name: 'spock',    enemieList: ['paper',   'lizard'] }

const optionList     = [rock, paper, scissors, lizard, spock]
const _getRandomNumber =  (maxNumber) => Math.floor(Math.random() * maxNumber.length)
const getCpuSelection = () => optionList[_getRandomNumber(optionList)]

const emojiMap = {
  rock:     '✊',
  paper:    '✋',
  scissors: '✌️',
  lizard:   '🫳',
  spock:    '🖖'
}

function playGame(userSelection) {
  const cpuSelection = getCpuSelection()

  if (userSelection.name === cpuSelection.name) {
    document.getElementById('user-selection').textContent = emojiMap[userSelection.name]
    document.getElementById('cpu-selection').textContent = emojiMap[cpuSelection.name]	
    document.getElementById('result').textContent =
      'Resultado: ¡Empate! 🤝'
    return
  }

  if (userSelection.enemieList.includes(cpuSelection.name)) {
    document.getElementById('user-selection').textContent = emojiMap[userSelection.name]
    document.getElementById('cpu-selection').textContent = emojiMap[cpuSelection.name]
    document.getElementById('result').textContent =
      'Resultado: ¡Has perdido! 😢'
    return
  }

  document.getElementById('user-selection').textContent = emojiMap[userSelection.name]
  document.getElementById('cpu-selection').textContent = emojiMap[cpuSelection.name]
  document.getElementById('result').textContent =
    'Resultado: ¡Has ganado 🎉'
}

window.rock     = rock
window.paper    = paper
window.scissors = scissors
window.lizard   = lizard
window.spock    = spock
window.playGame = playGame
