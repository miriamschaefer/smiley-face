'use strict';

const print = document.querySelector('.js-smiley');
const clickUpdate = document.querySelector('.js-button');
const inputSelector = document.querySelector('.js-selector');
const background = document.querySelector('.main');

function changeSmiley() {
  print.innerHTML = inputSelector.value;
}

function changeBackground() {
  const randomNumber = parseInt(Math.random() * 100);
  console.log(randomNumber);

  if (randomNumber % 2 === 0) {
    return background.classList.add('background2');
  } else {
    return background.classList.remove('background2');
  }
}

function submitHandler() {
  changeSmiley();
  changeBackground();
}

clickUpdate.addEventListener('click', submitHandler);
