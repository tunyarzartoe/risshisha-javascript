'use strict';
// ■演習問題
// Aさんは、
// ・体重が60kg
// ・身長が1.7m
// BMIを計算して、consoleへ出力してください。

// 補足：
// BMI = 体重kg / (身長m * 身長m)
// BMI・・・肥満度を表す体格指数。
const weight = 60; // 体重kg
const height = 1.7; // 身長m

const bmi = weight / (height * height); // BMIの計算
console.log(bmi); // BMIをコンソールへ出力