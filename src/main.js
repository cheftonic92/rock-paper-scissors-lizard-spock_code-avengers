import './style.css'

const rock     = { name: 'rock',     enemieList: ['paper',   'spock'] }
const paper    = { name: 'paper',    enemieList: ['scissors','lizard'] }
const scissors = { name: 'scissors', enemieList: ['rock',    'spock'] }
const lizard   = { name: 'lizard',   enemieList: ['scissors','rock'] }
const spock    = { name: 'spock',    enemieList: ['paper',   'lizard'] }

const optionList     = [rock, paper, scissors, lizard, spock]
const _getRandomNumber =  (maxNumber) => Math.floor(Math.random() * maxNumber.length)
const _setCpuSelection = () => optionList[_getRandomNumber(optionList)].name

const emojiMap = {
  rock:     '✊',
  paper:    '✋',
  scissors: '✌️',
  lizard:   '🫳',
  spock:    '🖖'
}

function playGame(userSelection) {
  const cpuSelection = _setCpuSelection()

  if (userSelection.name === cpuSelection) {
    document.querySelector('#user-selection').textContent = emojiMap[userSelection.name]
    document.querySelector('#cpu-selection').textContent = emojiMap[cpuSelection]	
    document.querySelector('#result').textContent =
      '¡Empate! 🤝'
    return
  }

  if (userSelection.enemieList.includes(cpuSelection)) {
    document.querySelector('#user-selection').textContent = emojiMap[userSelection.name]
    document.querySelector('#cpu-selection').textContent = emojiMap[cpuSelection]
    document.querySelector('#result').textContent =
      '¡Has perdido! 😢'
    return
  }

  document.querySelector('#user-selection').textContent = emojiMap[userSelection.name]
  document.querySelector('#cpu-selection').textContent = emojiMap[cpuSelection]
  document.querySelector('#result').textContent =
    '¡Has ganado 🎉'
}

window.rock     = rock
window.paper    = paper
window.scissors = scissors
window.lizard   = lizard
window.spock    = spock
window.playGame = playGame
