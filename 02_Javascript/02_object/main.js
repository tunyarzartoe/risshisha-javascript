'use strict';
// 例題: ユーザーオブジェクトの操作
// 変数userを用意
// 下記のオブジェクトを作成
// name: Taro Yamada
// gender: man
// birthYear: 1990
// 各値を、プロパティ（キー）を指定して、
// 取り出してコンソールに表示

// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);
let user = {
  name: 'Taro Yamada',
  gender: 'man',
  birthYear: 1990
};
console.log(user);
console.log(user.name);
console.log(user.gender);
console.log(user.birthYear);

console.log(user['name']);
console.log(user['gender']);
console.log(user['birthYear']);

// 存在しないプロパティを指定した場合は、undefinedが返る
console.log(user.address); // undefined

console.log(Object.keys(user)); // ['name', 'gender', 'birthYear']
console.log(Object.keys(user).length); // 3
console.log(Object.values(user)); // ['Taro Yamada', 'man', 1990]   
console.log(Object.entries(user)); // [['name', 'Taro Yamada'], ['gender', 'man'], ['birthYear', 1990]]

//追加
// user.address = 'Tokyo';
user['address'] = 'Tokyo';
console.log(user);

// 結合
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);
console.log(obj1);
console.log(obj2);