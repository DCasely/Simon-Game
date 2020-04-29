const startGameButton = document.querySelector('.start-button');
const gameAlert = document.querySelector('.game-alert');
const resetButton = document.querySelector('.reset-button');
const green = document.querySelector('.green-block');
const red = document.querySelector('.red-block');
const yellow = document.querySelector('.yellow-block');
const blue = document.querySelector('.blue-block');
let gameSequence = [];
let playerSequence = [];

// ===============================================
// START GAME
// ===============================================

startGameButton.addEventListener('click', startGame);

function startGame() {
  // START A NEW ARRAY WITH FIRST RANDOM BLOCK
  let randomBlocks = ['green', 'red', 'yellow', 'blue'];
  let random = Math.floor(Math.random() * 4);
  let firstBlock = randomBlocks[random];

  // PUSH RANDOM BLOCK ONLY IF GAME HASN'T STARTED
  if (gameSequence.length < 1) {
    gameSequence.push(firstBlock);
    gameAlert.innerHTML = 'LEVEL 1';
  }
  // IF PLAYER HITS START AGAIN ALERT THEM THAT THE GAME HAS STARTED
  else if (gameSequence.length >= 1) {
    gameAlert.innerHTML = 'GAME HAS STARTED ALREADY';
  }

  // FLASH THE FIRST COLOR BLOCK
  if (gameSequence[0] === 'green') {
    green.classList.add('flashit');
  } else if (gameSequence[0] === 'red') {
    red.classList.add('flashit');
  } else if (gameSequence[0] === 'yellow') {
    yellow.classList.add('flashit');
  } else if (gameSequence[0] === 'blue') {
    blue.classList.add('flashit');
  }
}

// ===============================================
// RESET GAME
// ===============================================

resetButton.addEventListener('click', resetGame);

function resetGame() {
  // CLEAR THE ARRAYS (gameSequence) and (playerSequence)
  gameSequence = [];
  playerSequence = [];
  // INITIATE START
  startGame();
}

// ===============================================
// GAME SEQUENCE AND PLAYER SEQUENCE
// ===============================================

green.addEventListener('click', () => {
  playerSequence.push('green');

  if (gameSequence !== playerSequence) {
    gameAlert.innerHTML = 'GAME OVER';
  }
});
red.addEventListener('click', () => {
  playerSequence.push('red');

  if (gameSequence !== playerSequence) {
    gameAlert.innerHTML = 'GAME OVER';
  }
});
yellow.addEventListener('click', () => {
  playerSequence.push('yellow');

  if (gameSequence !== playerSequence) {
    gameAlert.innerHTML = 'GAME OVER';
  }
});
blue.addEventListener('click', () => {
  playerSequence.push('blue');

  if (gameSequence !== playerSequence) {
    gameAlert.innerHTML = 'GAME OVER';
  }
});
