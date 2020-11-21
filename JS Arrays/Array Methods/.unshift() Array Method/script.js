/* -------------------------------------------------------------------------- */
/*                           .unshift() Array Method                          */
/* -------------------------------------------------------------------------- */

// .unshift() Array Method adds one or more elements at the beginning of an array and returns new length of an array

const numbers = [1,2,3,4];
const newNums = numbers.unshift(-2, -1, 0);
console.log(numbers);
// [ -2, -1, 0, 1, 2, 3, 4 ]
console.log(newNums);
// 7