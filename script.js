'use strict';

document.querySelector('.rules').classList.remove('hidden');
document.querySelector('.rulesback').classList.remove('hidden');

/* Generating the Random range of numbers between 1-20 */
let secretNumber = Math.trunc(Math.random() * 21);

//console.log(secretNumber);
//document.querySelector('.number').textContent = secretNumber;

/* storing the Score */
let score = 20;
document.querySelector('.score').textContent = score;

/* storing the High Score Value */

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

/* write event for click button*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  // enter some value
  if (guess == 0) {
    document.querySelector('.message').textContent = '😉 Enter some Value ';
  }
  // be in range.
  else if (guess > 20) {
    document.querySelector('.message').textContent =
      '👀check the range in above';
  } else if (guess < 0) {
    document.querySelector('.message').textContent =
      '👀check the range in above';
  }
  //Validation starts
  else {
    if (guess == secretNumber) {
      //winning decider
      document.querySelector('.message').textContent = '⚡ Won the Battle';
      //high score validation
      if (score > highScore) {
        highScore = score;
      } else {
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.highscore').textContent = highScore;
      // styling
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.backgroundColor = 'green';
      document.querySelector('.number').style.color = '#eee';
      document.querySelector('.number').style.width = '30rem';
    }
    // too high
    else if (guess > secretNumber) {
      if (score > 1) {
        //limiting the score within 0
        document.querySelector('.message').textContent = '😂 Too High!';
        score = score - 1;
        console.log('The Score' + score);
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = 0;
      } else {
        document.querySelector('.message').textContent = '🤖 You Lost!';
        document.querySelector('.score').textContent = 0;
      }
    } // too Low !
    else if (guess < secretNumber) {
      if (score > 1) {
        //limiting the score within 0
        document.querySelector('.message').textContent = '🤣 Too Low!';
        score = score - 1;
        console.log('The Score' + score);
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = 0;
      } else {
        document.querySelector('.message').textContent = '🤖 You Lost!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

/* Reloading Event */
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = 0;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.message').textContent = 'Start guessing...';
  //console.log('After the again btn ' + secretNumber);
  //styling
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.backgroundColor = '#ddd';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
});

//start button event
document.querySelector('.start-btn').addEventListener('click', function () {
  document.querySelector('.rules').classList.add('hidden');
  document.querySelector('.rulesback').classList.add('hidden');
  document.querySelector('.guess').value = 0;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.start-btn').textContent = 'Restart!';
  //console.log('After the again btn ' + secretNumber);
  //styling
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.backgroundColor = '#ddd';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
});

// rules closer
document.querySelector('.rulescloser').addEventListener('click', function () {
  document.querySelector('.rules').classList.add('hidden');
  document.querySelector('.rulesback').classList.add('hidden');
});

// rules button
document.querySelector('.rules-btn').addEventListener('click', function () {
  document.querySelector('.rules').classList.remove('hidden');
  document.querySelector('.rulesback').classList.remove('hidden');
});
