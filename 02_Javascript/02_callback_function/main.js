'use strict';
// const displayMessage = function (name) {
//   console.log('Timeout!');
// };

// setTimeout(displayMessage, 2000, 'John');
function greetting(name) {
  console.log('Hello, ' + name + '!');
}

setTimeout(greetting, 2000, 'John');

function inputUserName(callback) {
  const name = prompt('What is your name?');
  callback(name);
}

inputUserName(greetting);