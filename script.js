const selections = ['rock','paper','scissors'];
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const resultMsg = document.querySelector('.result-message');
const resultAction = document.querySelector('.results-action');
const mondal = document.querySelector('.mondal');
const overlay = document.querySelector('.overlay');

let playerCurrentScore = 0;
let computerCurrentScore = 0;
let roundWinner = '';
let result = '';

function gameOver(){
  mondal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const playGame = (playerChoice) =>{
  const computerChoice = selections[Math.trunc((Math.random() * 3))];
  if(playerChoice === computerChoice){
    result = 'TIE!';
  } else {
    switch(playerChoice){
      case 'rock' :
        result = (computerChoice === 'scissors') ? 'You Won!': 'You Lost!';
        break;
      case 'paper' :
        result = (computerChoice === 'rock') ? 'You Won!' : 'You Lost!';
        break;
      case 'scissors' :
        result = (computerChoice === 'paper') ? 'You Won!' : 'You Lost!';
        break;
    }
    
  }
  switch(result){
    case 'You Won!' :
      playerCurrentScore++
      playerScore.textContent = `Player: ${playerCurrentScore}`;
      roundWinner = 'player';
      break;
    case 'You Lost!' :
      computerCurrentScore++;
      computerScore.textContent = `Computer: ${computerCurrentScore}`;
      roundWinner = 'computer';
      break;
    default:
      roundWinner = '';
      break;
  }
  if(playerCurrentScore === 5){
    gameOver();
  } else if(computerCurrentScore === 5){
    gameOver();
    document.querySelector('.mondal-title').textContent = 'You Lost!';
  }


  resultMsg.textContent = result;
  UpdateScoreMessage(roundWinner,playerChoice,computerChoice);
}

const UpdateScoreMessage = (winner,playerSelection,computerSelection) => {
  if(winner === 'player'){
    resultAction.textContent = `${playerSelection} beats ${computerSelection}`;
    return;
  }
  if(winner === 'computer'){
    resultAction.textContent = `${playerSelection} is beaten by ${computerSelection}`;
    return;
  }
  if(result === 'TIE!'){
    resultAction.textContent = `${playerSelection} ties with ${computerSelection}`;
  }
}

document.querySelector('.mondal-restart').addEventListener('click', () =>{
  playerCurrentScore = 0;
  computerCurrentScore = 0;
  playerScore.textContent = 'Player: 0';
  computerScore.textContent = 'Computer: 0';
  mondal.classList.add('hidden');
  overlay.classList.add('hidden');
  resultMsg.textContent = 'Choose Your Weapon';
  resultAction.textContent = '';
})