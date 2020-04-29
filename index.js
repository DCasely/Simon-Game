document.querySelector('body').addEventListener('click', function () {
  rollDice();
  rollDice2();

  winner();
});

// PLAYER DICE NUMBERS

let player1Dice, player2Dice;

// ROLL DICE FUNCTIONS

function rollDice() {
  let n = Math.floor(Math.random() * 6) + 1;
  player1Dice = n;
  let dice = document
    .querySelector('.img1')
    .setAttribute('src', `./images/dice${n}.png`);

  return dice;
}

function rollDice2() {
  let n = Math.floor(Math.random() * 6) + 1;
  player2Dice = n;
  let dice = document
    .querySelector('.img2')
    .setAttribute('src', `./images/dice${n}.png`);

  return dice;
}

// WINNER

function winner() {
  if (player1Dice > player2Dice) {
    return (document.querySelector('h1').innerHTML = '🚩 Player 1 Wins');
  } else if (player2Dice > player1Dice) {
    return (document.querySelector('h1').innerHTML = 'Player 2 Wins 🚩');
  } else {
    return (document.querySelector('h1').innerHTML = 'Draw');
  }
}
