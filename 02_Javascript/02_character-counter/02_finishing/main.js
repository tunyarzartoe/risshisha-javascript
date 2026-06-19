'use strict';

function keyUp(e) {
    // console.log("key up")
    // console.log(inputText.value);
    // console.log(inputText.value.length);
    let str = inputText.value;
    str = str.replace(/\r?\n/g, '');

    let num = 10 - str.length;
    console.log(num);
    const characterCount = document.getElementById("characterCount");
    characterCount.textContent = num;

    const characterCountWrap = document.getElementById("characterCountWrap");
    if (num >= 0) {
        characterCountWrap.style.color = 'black';
    } else {
        characterCountWrap.style.color = 'red';
    }
}
const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false)
