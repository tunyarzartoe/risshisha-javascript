'use strict';
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}   
const scores = [
    [80, 90, 100],  
    [70, 85, 95],
    [60, 75, 85]    
]
console.log(scores[0]); // [80, 90, 100]
console.log(scores[0][1]); // 90
for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        console.log(scores[i][j]);
    }
}   // 80, 90, 100, 70, 85, 95, 60, 75, 85

