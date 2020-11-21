/* -------------------------------------------------------------------------- */
/*                           .reverse() Array Method                          */
/* -------------------------------------------------------------------------- */

// Using the .reverse() Array Method you can reverse an array, meaning that first element will become last, and the last element will become first;

// it modifies/changes original Array !!! - for solving this problem, We can use .concat() method there..

const numbers = [1,2,3,4,5];
let result = numbers.concat().reverse();
console.log(numbers);
// [ 1, 2, 3, 4, 5 ]
console.log(result);
// [ 5, 4, 3, 2, 1 ]

/* -------------------------------------------------------------------------- */

const str = 'I want at home!';
const res = str
    .split('')
    .reverse()
    .join('');
console.log(res);
// !emoh ta tnaw I

