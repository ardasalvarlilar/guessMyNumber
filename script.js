'use strict';

let secretNumber = Math.floor(Math.random() * 20)
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20)
  document.querySelector('.number').textContent = secretNumber
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
});

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  // when no input
  if(!guess){
    document.querySelector('.message').textContent = '⛔️ No Number!'

    // when player wins
  }else if(guess === secretNumber){
    document.querySelector('.message').textContent ='🎉 Correct Number'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    // when guess is too high
  }else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too high!'
      score--
      document.querySelector('.score').textContent = score
    }else{
      document.querySelector('.message').textContent = '💥 You lost the game!'
      document.querySelector('.score').textContent = 0
    }

    // when guess is too low
  }else if(guess < secretNumber){

    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too low!'
      score--
      document.querySelector('.score').textContent = score
    }else{
      document.querySelector('.message').textContent = '💥 You lost the game!'
      document.querySelector('.score').textContent = 0
    }
  }
})