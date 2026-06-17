'use strict';

let num = 0;

function updateCounter() {
    if (num < 0) {
        num = 0;
    }
    console.log(num);
    const counter = document.getElementById('counter');
    counter.textContent = num;
}

function addCount() {
    console.log('add count');
    num++;
    updateCounter();
}

function reduceCount() {
    console.log(num);
    num--;
    updateCounter();
}

function resetCount() {
    console.log('reset count');
    num = 0;
    updateCounter();
}

const addBtn = document.getElementById('countUpButton');
addBtn.addEventListener('click', addCount);

const reduceBtn = document.getElementById('reduceButton');
reduceBtn.addEventListener('click', reduceCount);

const resetBtn = document.getElementById('resetButton');
resetBtn.addEventListener('click', resetCount);