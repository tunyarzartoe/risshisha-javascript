'use strict';
// 例題: オブジェクトuserに、
// 生まれた年から年齢を計算する
// メソッドを追加

// let user = {
//   name: 'Taro Yamada',
//   gender: 'man',
//   birthYear: 2001,
//   calcAge: function(thisYear) {
//     // console.log(birthYear); // NG
//     // console.log(this);
//     // console.log(this.birthYear);
//     return thisYear - this.birthYear;
//   }
// }
// console.log(user.calcAge(2026)); // 25

const testFunc4 = () => {
console.log('hello'); // hello, hello, hello
}
const timeoutId = setInterval(testFunc4, 3000);
setTimeout(() => {
clearInterval(timeoutId);
}, 10000);