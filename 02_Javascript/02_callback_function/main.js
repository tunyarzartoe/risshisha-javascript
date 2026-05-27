'use strict';
const displayMessage = function (name) {
  console.log('Timeout!');
};

setTimeout(displayMessage, 2000, 'John');