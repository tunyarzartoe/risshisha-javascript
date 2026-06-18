'use strict';

function keyUp(e) {
    // console.log("key up")
    // console.log(inputText.value);
    // console.log(inputText.value.length);
    let str = inputText.value;

    let num = 10 - str.length;
    console.log(num);
    const characterCount = document.getElementById("characterCount");
    characterCount.textContent = num;
}
const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup',keyUp,false)
