'use strict';
// 演習問題「みかんの合計金額を計算するプログラム」
// Aさんが1個100円のみかんを、20個買いました。 
// みかんの単価と個数を引数に渡すと、
// 合計金額を計算して返す関数を作成。
// 作成した関数を呼び出して、
// Aさんの支払合計金額はいくらになるか計算して、
// コンソールに出力する。
// ※消費税は考慮しないものとする。 
// 回答例では、function 命令で定義する方法で、実装。

function totalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
}

const unitPrice = 100; // みかんの単価
const quantity = 20; // みかんの個数

const result = totalPrice(unitPrice, quantity); // 合計金額を計算
console.log(result); // 合計金額をコンソールに出力  