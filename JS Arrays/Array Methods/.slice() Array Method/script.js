/* -------------------------------------------------------------------------- */
/*                            .slice() Array Method                           */
/* -------------------------------------------------------------------------- */

// .slice() Array Method returns shallow copy of a portion of an array. It doesn't modified an original array. It can be used to retrieve a portion of an array. It's useful because we usually don't want to modify the original array.
// You can provide the beginnig index and the last index.

/* -------------------------------------------------------------------------- */

// we want to get an new array from 2 until 4 [2,3,4]
const numbers = [1,2,3,4,5];
const newNums = numbers.slice(1, 4);
console.log(numbers); // [ 1, 2, 3, 4, 5 ] - numbers not modified!
console.log(newNums); // [ 2, 3, 4 ]

// if we doesn't provide parametres in .slice, we just get copy.
const copyNumbers = numbers.slice();
console.log(copyNumbers); // [ 1, 2, 3, 4, 5 ]

// we can provide negative numbers inside of parametres and we get last 3 elements of arrays [ 3, 4, 5 ]
const negParamsNums = numbers.slice(-3);
console.log(negParamsNums); // [ 3, 4, 5 ]

// get all items from choosen index [ 2, 3, 4, 5 ]
const untilEnd = numbers.slice(1);
console.log(untilEnd); // [ 2, 3, 4, 5 ]

/* -------------------------------------------------------------------------- */

const participants = ['Florin','Ivan','Karla','Barnch','Bebe'];
const winners = participants.slice(0, 3);
console.log(winners); // [ 'Florin', 'Ivan', 'Karla' ];