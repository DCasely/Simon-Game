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
}

// ===============================================
// NEXT SEQUENCE
// ===============================================
function nextSequence() {
  // START A NEW ARRAY WITH FIRST RANDOM BLOCK
  let random = Math.floor(Math.random() * 4);
  let randomBlock = randomBlocks[random];

  // PUSH NEXT RANDOM BLOCK INTO (gameSequence)
  gameSequence.push(randomBlock);

  // NEXT LEVEL
  level++;
  gameAlert.innerHTML = `LEVEL ${level}`;

  // REMOVE FLASH CLASSES FOR REPEAT
  green.classList.remove('flashit');
  red.classList.remove('flashit');
  yellow.classList.remove('flashit');
  blue.classList.remove('flashit');

  // FLASH NEXT COLORED BLOCK
  flashBlocks();

  // REMOVE FLASH CLASSES FOR REPEAT

  setTimeout(() => {
    green.classList.remove('flashit');
  }, 1000);
  setTimeout(() => {
    red.classList.remove('flashit');
  }, 1000);
  setTimeout(() => {
    yellow.classList.remove('flashit');
  }, 1000);
  setTimeout(() => {
    blue.classList.remove('flashit');
  }, 1000);

  console.log(gameSequence);
}

// ===============================================
// FLASH COLOR BLOCKS
// ===============================================

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

// ============================
// GREEN KEYPRESS OR CLICK
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'g' || e.key == 7) {
    playerSequence.push('green');
    // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
    if (playerSequence.length === gameSequence.length) {
      // TEST IF PLAYER MADE CORRECT CHOICES
      for (let i = 0; i < gameSequence.length; i++) {
        if (playerSequence[i] !== gameSequence[i]) {
          gameAlert.innerHTML = 'GAME OVER';
          gameAlert.classList.add('flashit');

          setTimeout(() => {
            gameAlert.classList.remove('flashit');
          }, 1000);
          return false;
        }
      }
      // RESET (playerSequence)
      playerSequence = [];

      nextSequence();
    }
  }
});

green.addEventListener('click', () => {
  playerSequence.push('green');
  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        gameAlert.classList.add('flashit');

        setTimeout(() => {
          gameAlert.classList.remove('flashit');
        }, 1000);
        return false;
      }
    }
    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// ============================
// RED KEYPRESS OR CLICK
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'r' || e.key == 9) {
    playerSequence.push('red');
    // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
    if (playerSequence.length === gameSequence.length) {
      // TEST IF PLAYER MADE CORRECT CHOICES
      for (let i = 0; i < gameSequence.length; i++) {
        if (playerSequence[i] !== gameSequence[i]) {
          gameAlert.innerHTML = 'GAME OVER';
          gameAlert.classList.add('flashit');

          setTimeout(() => {
            gameAlert.classList.remove('flashit');
          }, 1000);
          return false;
        }
      }
      // RESET (playerSequence)
      playerSequence = [];

      nextSequence();
    }
  }
});

red.addEventListener('click', () => {
  playerSequence.push('red');
  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        gameAlert.classList.add('flashit');

        setTimeout(() => {
          gameAlert.classList.remove('flashit');
        }, 1000);
        return false;
      }
    }
    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// ============================
// YELLOW KEYPRESS OR CLICK
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'y' || e.key == 1) {
    playerSequence.push('yellow');
    // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
    if (playerSequence.length === gameSequence.length) {
      // TEST IF PLAYER MADE CORRECT CHOICES
      for (let i = 0; i < gameSequence.length; i++) {
        if (playerSequence[i] !== gameSequence[i]) {
          gameAlert.innerHTML = 'GAME OVER';
          gameAlert.classList.add('flashit');

          setTimeout(() => {
            gameAlert.classList.remove('flashit');
          }, 1000);
          return false;
        }
      }
      // RESET (playerSequence)
      playerSequence = [];

      nextSequence();
    }
  }
});

yellow.addEventListener('click', () => {
  playerSequence.push('yellow');
  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        gameAlert.classList.add('flashit');

        setTimeout(() => {
          gameAlert.classList.remove('flashit');
        }, 1000);
        return false;
      }
    }
    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

// ============================
// BLUE KEYPRESS OR CLICK
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'b' || e.key == 3) {
    playerSequence.push('blue');
    // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
    if (playerSequence.length === gameSequence.length) {
      // TEST IF PLAYER MADE CORRECT CHOICES
      for (let i = 0; i < gameSequence.length; i++) {
        if (playerSequence[i] !== gameSequence[i]) {
          gameAlert.innerHTML = 'GAME OVER';
          gameAlert.classList.add('flashit');

          setTimeout(() => {
            gameAlert.classList.remove('flashit');
          }, 1000);
          return false;
        }
      }
      // RESET (playerSequence)
      playerSequence = [];

      nextSequence();
    }
  }
});

blue.addEventListener('click', () => {
  playerSequence.push('blue');
  // IF (playerSequence) and (gameSequence) LENGTH MATCH > (nextSequence)
  if (playerSequence.length === gameSequence.length) {
    // TEST IF PLAYER MADE CORRECT CHOICES
    for (let i = 0; i < gameSequence.length; i++) {
      if (playerSequence[i] !== gameSequence[i]) {
        gameAlert.innerHTML = 'GAME OVER';
        gameAlert.classList.add('flashit');

        setTimeout(() => {
          gameAlert.classList.remove('flashit');
        }, 1000);
        return false;
      }
    }
    // RESET (playerSequence)
    playerSequence = [];

    nextSequence();
  }
});

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
