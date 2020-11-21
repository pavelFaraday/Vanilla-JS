/* -------------------------------------------------------------------------- */
/*                            .from() Array Method                            */
/* -------------------------------------------------------------------------- */

//  .from() Array Method creates a new shallow coppied array from an array like or iterable object.

/* -------------------------------------------------------------------------- */

const str = '1234567';

let result = Array.from(str, x => Number(x));

console.log(result);
// [ 1, 2, 3, 4, 5, 6, 7 ]

/* -------------------------------------------------------------------------- */

// remove dublicated values
const numbers  = [1,2,3,3,2,1,4,4,3,5];

let newArray = Array.from(new Set(numbers));
console.log(newArray);
// [ 1, 2, 3, 4, 5 ]

