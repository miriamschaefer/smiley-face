"use strict";

const print = document.querySelector(".js-smiley");
const clickUpdate = document.querySelector(".js-button");
const inputSelector = document.querySelector(".js-selector");

function changeSmiley(event) {
  print.innerHTML = inputSelector.value;
}

clickUpdate.addEventListener("click", changeSmiley);
