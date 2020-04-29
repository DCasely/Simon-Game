const startGameButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const green = document.querySelector('.green-block');
const red = document.querySelector('.red-block');
const yellow = document.querySelector('.yellow-block');
const blue = document.querySelector('.blue-block');
let randomBlocks = ['green', 'red', 'yellow', 'blue'];
let gameAlert = document.querySelector('.game-alert');
let gameSequence = [];
let playerSequence = [];
let level = 0;

// ===============================================
// START GAME
// ===============================================

startGameButton.addEventListener('click', startGame);

function startGame() {
  // IF PLAYER HITS START AGAIN ALERT THEM THAT THE GAME HAS STARTED
  if (gameSequence.length < 1) {
    nextSequence();
  } else {
    gameAlert.innerHTML = 'GAME HAS STARTED ALREADY';
  }

  flashBlocks();
}

function flashBlocks() {
  // FLASH THE FIRST COLOR BLOCK
  if (gameSequence[level - 1] === 'green') {
    green.classList.add('flashit');
  } else if (gameSequence[level - 1] === 'red') {
    red.classList.add('flashit');
  } else if (gameSequence[level - 1] === 'yellow') {
    yellow.classList.add('flashit');
  } else if (gameSequence[level - 1] === 'blue') {
    blue.classList.add('flashit');
  }
}

// ===============================================
// NEXT SEQUENCE
// ===============================================
function nextSequence() {
  // RESET PLAYERSEQUENCE
  // playerSequence = [];

  // REMOVE FLASH CLASSES FOR REPEAT
  green.classList.remove('flashit');
  red.classList.remove('flashit');
  yellow.classList.remove('flashit');
  blue.classList.remove('flashit');

  // START A NEW ARRAY WITH FIRST RANDOM BLOCK
  let random = Math.floor(Math.random() * 4);
  let randomBlock = randomBlocks[random];

  // PUSH NEXT RANDOM BLOCK INTO (gameSequence)
  gameSequence.push(randomBlock);

  level++;
  gameAlert.innerHTML = `LEVEL ${level}`;
  flashBlocks();

  console.log(`playersequence: ${playerSequence}`);
  console.log(`gamesequence: ${gameSequence}`);
}

// ===============================================
// RESET GAME
// ===============================================

resetButton.addEventListener('click', resetGame);

function resetGame() {
  // CLEAR THE ARRAYS (gameSequence) and (playerSequence)
  gameSequence = [];
  playerSequence = [];
  level = 0;

  // INITIATE START
  startGame();
}

// ===============================================
// GAME SEQUENCE AND PLAYER SEQUENCE
// ===============================================

// GREEN BLOCK CLICK
green.addEventListener('click', () => {
  playerSequence.push('green');

  if (gameSequence[level - 1] !== playerSequence[level - 1]) {
    gameAlert.innerHTML = 'GAME OVER';
  } else {
    nextSequence();
  }
});

// RED BLOCK CLICK
red.addEventListener('click', () => {
  playerSequence.push('red');

  if (gameSequence[level - 1] !== playerSequence[level - 1]) {
    gameAlert.innerHTML = 'GAME OVER';
  } else {
    nextSequence();
  }
});

// YELLOW BLOCK CLICK
yellow.addEventListener('click', () => {
  playerSequence.push('yellow');

  if (gameSequence[level - 1] !== playerSequence[level - 1]) {
    gameAlert.innerHTML = 'GAME OVER';
  } else {
    nextSequence();
  }
});

// BLUE BLOCK CLICK
blue.addEventListener('click', () => {
  playerSequence.push('blue');

  if (gameSequence[level - 1] !== playerSequence[level - 1]) {
    gameAlert.innerHTML = 'GAME OVER';
  } else {
    nextSequence();
  }
});
