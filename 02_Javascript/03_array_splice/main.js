'use strict'

const fruits = ['apple', 'banana', 'orange', 'grape']
fruits.splice(1, 2, 'kiwi', 'melon')
console.log(fruits) // ['apple', 'kiwi', 'melon', 'grape']