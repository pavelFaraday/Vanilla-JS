/* -------------------------------------------------------------------------- */
/*                            .splice() Array Method                          */
/* -------------------------------------------------------------------------- */

// .splice() Array Method changes an array by removing, replacing or adding existing elements from it.

/* -------------------------------------------------------------------------- */
// remove 3,4,5 from array: 2 - remove from 2th index, 3 - remove last 3 elements
const numbers = [1,2,3,4,5];
const deleted = numbers.splice(2, 3);
console.log(deleted); // [ 3, 4, 5 ]
console.log(numbers); // [ 1, 2 ]

/* -------------------------------------------------------------------------- */

// delete last 3 elements and replace them with 6,7
const nums = [1,2,3,4,5];
const replaced =  nums.splice(2, 3, 6, 7);
console.log(nums); // [ 1, 2, 6, 7 ]
console.log(replaced); // [ 3, 4, 5 ]

const names = ['Luke', 'Barbara', 'John', 'Mario'];
const repNames = names.splice(0, 1, 'Luigi');
console.log(names);
// [ 'Luigi', 'Barbara', 'John', 'Mario' ]

const names_2 = ['Luke', 'Barbara', 'John', 'Mario'];
const repNames_2 = names_2.splice(1, 1, 'Daho', 'Faro');
console.log(names_2);
// [ 'Luke', 'Daho', 'Faro', 'John', 'Mario' ]

/* -------------------------------------------------------------------------- */

// don't remove anything and just add something to an array
const myNums = [1,2,3,4,5];
const added =  myNums.splice(5, 0, 6, 7);
console.log(myNums); // [ 1, 2, 3, 4, 5, 6, 7 ]

