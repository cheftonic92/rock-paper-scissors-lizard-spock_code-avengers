import './style.css'

const rock     = { name: 'rock',     enemieList: ['paper',   'spock'] }
const paper    = { name: 'paper',    enemieList: ['scissors','lizard'] }
const scissors = { name: 'scissors', enemieList: ['rock',    'spock'] }
const lizard   = { name: 'lizard',   enemieList: ['scissors','rock'] }
const spock    = { name: 'spock',    enemieList: ['paper',   'lizard'] }

let cpuSelection = '';

const optionList     = [rock, paper, scissors, lizard, spock]
const _getRandomNumber =  (maxNumber) => Math.floor(Math.random() * maxNumber.length)
const _setCpuSelection = () => optionList[_getRandomNumber(optionList)].name;

'¡Has perdido! 😢', '¡Has ganado 🎉'
const DRAW = '¡Empate! 🤝';
const WIN  = '¡Has ganado! 🎉';
const LOSE = '¡Has perdido! 😢';

const _getResult = (userSelection, cpuSelection) => {
  if (userSelection.name === cpuSelection) {
    return DRAW;
  }

  if (userSelection.enemieList.includes(cpuSelection)) {
    return LOSE;
  }

  return WIN;
}

const _renderUserSelection = (userSelection) => {
  const userSelectionElement = document.querySelector('#user-selection');
  const userEmoji = emojiMap[userSelection.name];
  userSelectionElement.textContent = `
    ${userEmoji}
  `;
}
const _renderCpuSelection = (cpuSelection) => {
  const cpuSelectionElement = document.querySelector('#cpu-selection');
  const cpuEmoji = emojiMap[cpuSelection];
  cpuSelectionElement.textContent = `
    ${cpuEmoji}
  `;
}

const _renderResult = (result) => {
  

  const resultElement = document.querySelector('#result');
  resultElement.textContent = `
    ${result}
  `;
}


const emojiMap = {
  rock:     '✊',
  paper:    '✋',
  scissors: '✌️',
  lizard:   '🫳',
  spock:    '🖖'
}
const playGame = (userSelection) => {
  cpuSelection = _setCpuSelection()
  _renderUserSelection(userSelection);
  _renderCpuSelection(cpuSelection);
  const result = _getResult(userSelection, cpuSelection);
  _renderResult(result);
}

window.rock     = rock
window.paper    = paper
window.scissors = scissors
window.lizard   = lizard
window.spock    = spock
window.playGame = playGame
