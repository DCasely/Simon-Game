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
// PLAYER SEQUENCE
// ===============================================

// GREEN BLOCK CLICK
green.addEventListener('click', () => {
  playerSequence.push('green');
  console.log(playerSequence);

  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        return false;
      }
    }

    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// RED BLOCK CLICK
red.addEventListener('click', () => {
  playerSequence.push('red');
  console.log(playerSequence);

  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        return false;
      }
    }

    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// YELLOW BLOCK CLICK
yellow.addEventListener('click', () => {
  playerSequence.push('yellow');
  console.log(playerSequence);

  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        return false;
      }
    }

    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// BLUE BLOCK CLICK
blue.addEventListener('click', () => {
  playerSequence.push('blue');
  console.log(playerSequence);

  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        return false;
      }
    }

    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// ===============================================
// NEXT SEQUENCE
// ===============================================
function nextSequence() {
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
// PLAYER VS GAME SEQUENCE
// ===============================================

function playerVsGame() {
  // // TEST IF (playerSequence) MATCHES (gameSequence)
  // for (let i = 0; i < gameSequence.length; i++) {
  //   if (playerSequence[i] !== gameSequence[i]) {
  //     gameAlert.innerHTML = 'GAME OVER';
  //     return false;
  //   }
  // }
}
