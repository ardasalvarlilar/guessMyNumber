'use strict';

let secretNumber = Math.floor(Math.random() * 20)
let score = 20
let highScore = 0

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20)
  let score = 20
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'
  displayMessage('Start guessing...' )
});

const displayMessage = message => {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  // when no input
  if(!guess){
    displayMessage('⛔️ No Number!')
    // when player wins
  }else if(guess === secretNumber){
    displayMessage('🎉 Correct Number!')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if(score > highScore){
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

  } else if(guess !== secretNumber){
    if(score > 1){
      displayMessage( guess > secretNumber ? '📈 Too high!' : '📈 Too low!')
      score--
      document.querySelector('.score').textContent = score
    }else{
      displayMessage('💥 You lost the game!')
      document.querySelector('.score').textContent = 0
    }
  } 
})