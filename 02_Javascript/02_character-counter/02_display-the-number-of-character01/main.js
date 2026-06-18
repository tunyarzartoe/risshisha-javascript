'use strict';

function keyUp(e) {
    console.log("key up")
    console.log(inputText.value);
    console.log(inputText.value.length);
}
const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup',keyUp,false)
