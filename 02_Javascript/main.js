'use strict';
// console.log("Hello, JavaScript!");
// console.log("Hello, I\'m learning JavaScript!");

//定数
const PI = 3.14;
console.log(PI);

let myName = "Yar Zar";
let num = 123;
let dec = 123.456;

console.log(myName);
console.log(num);
console.log(dec);

console.log(typeof myName);
console.log(typeof num);
console.log(typeof dec);

let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

let i = 20;
let j = 10;

console.log(i + j); // 足し算
console.log(i - j); // 引き算
console.log(i * j); // 掛け算
console.log(i / j); // 割り算
console.log(i % j); // 余り

let k = 5;
k += 10; // k = k + 10 と同じ意味
console.log(k);

k -= 3; // k = k - 3 と同じ意味
console.log(k);

k *= 2; // k = k * 2 と同じ意味
console.log(k);

k /= 4; // k = k / 4 と同じ意味
console.log(k);

let l = 10;
l++; // l = l + 1 と同じ意味
console.log(l);

l--; // l = l - 1 と同じ意味
console.log(l);

let m = 5;
let n = 10;

console.log(m > n); // mはnより大きいか？
console.log(m < n); // mはnより小さいか？
console.log(m >= n); // mはn以上か？
console.log(m <= n); // mはn以下か？
console.log(m === n); // mとnは等しいか？
console.log(m !== n); // mとnは等しくないか？

let o = 5;
let p = 10;

console.log(o && p); // oもpも真であるか？
console.log(o || p); // oまたはpのどちらかが真であるか？
console.log(!o); // oは偽であるか？ 

//if文の例
let temperature = 29;
if (temperature > 28) {
    console.log("It's hot outside!");
} else if (temperature < 15) {
    console.log("It's cold outside!");
} else {
    console.log("The weather is nice!");
}