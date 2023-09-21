'use strict';

const secretNumber = Math.floor(Math.random() * 20)
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if(!guess){
    document.querySelector('.message').textContent = '⛔️ No Number!'
  }else if(guess === secretNumber){
    document.querySelector('.message').textContent ='🎉 Correct Number'
  }else if(guess > secretNumber){
    document.querySelector('.message').textContent = '📈 Too high!'
    score--
    document.querySelector('.score').textContent =score
  }else if(guess < secretNumber){
    document.querySelector('.message').textContent = '📉 Too low!'
    document.querySelector('.score').textContent =score
  }
})