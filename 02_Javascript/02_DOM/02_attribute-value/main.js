'use strict';

const btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
    let inputColorName = document.getElementById('inputColorName');
    console.log(inputColorName.value);
    let colorNameText = inputColorName.value;

    let inputName = document.getElementById('inputColorName').getAttribute('name');

    let showText = document.getElementById('showText');
    showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;

}, false);