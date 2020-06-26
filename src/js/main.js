"use strict";

const print = document.querySelector(".js-smiley");
const clickUpdate = document.querySelector(".js-button");
const inputSelector = document.querySelector(".js-selector");
const background = document.querySelector(".main");

function changeSmiley() {
  print.innerHTML = inputSelector.value;
  console.log(changeBackground(0, 100));
}

function changeBackground(min, max) {
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log(randomNumber);

  if (randomNumber % 2 === 0) {
    return background.classList.add("background2");
  } else {
    return background.classList.remove("background2");
  }
}

clickUpdate.addEventListener("click", changeSmiley, changeBackground);
