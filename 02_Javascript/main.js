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

let g = 10;
if (g > 0) {
    console.log("g is positive");
} else if (g < 0) {
    console.log("g is negative");
} else {
    console.log("g is zero");
}

let score = 55;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

let birthYear = 1990;
let age = 25;
let currentYear = new Date().getFullYear();
let nowAge = currentYear - birthYear;

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

console.log(Number(birthYear) + Number(age)); // 文字列を数値に変換

let number = 100;
let string = "100";
if (number === Number(string)) {
    console.log("Number and string are equal with === operator.");
} else {
    console.log("Number and string are not equal with === operator.");
}

if (number == string) {
    console.log("Number and string are equal with == operator.");
} else {
    console.log("Number and string are not equal with == operator.");
}

//&& 論理AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//|| 論理OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//! && 論理ANDの例
let age1 = 25;
let hasLicense = true;

if (age1 >= 18 && hasLicense) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}

//! 論理NOT
// console.log(!true); // false
// console.log(!false); // true            

// let number1 = 6 ;
// if (number1 % 2 === 0) {
//     if (number1 % 3 === 0) {
//         console.log(`${number1}は、２の倍数であり、３の倍数でもあります。`);
//     } else {
//         console.log(`${number1}は、２の倍数ですが、３の倍数ではありません。`);
//     }
// } else {
//     console.log(`${number1}は、２の倍数ではありません。`);
// }

let num1 = 1;
switch (num1) {
    case 1:
        console.log("金賞");
        break;
    case 2:
        console.log("銀賞");
        break;
    case 3:
        console.log("銅賞");
        break;
    case 3:
        console.log("銅賞");
        break;
    default:
        console.log("入賞なし");
}   