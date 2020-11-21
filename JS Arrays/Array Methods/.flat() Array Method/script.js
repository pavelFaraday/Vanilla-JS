/* -------------------------------------------------------------------------- */
/*                            .flat() Array Method                            */
/* -------------------------------------------------------------------------- */

// .flat() Array Method creates a new array with all the sub-arrays elements concatenated into it.
// flat(3) --- Is the depth of the arrays that we want to combine the total number of

/* -------------------------------------------------------------------------- */

const arr = [1, [2, [3, [4]]]];

const result = arr.flat();
console.log(result);
// [1, 2, [3, [4 ]]];

const result_2 = arr.flat(2);
console.log(result_2);
// [1, 2, 3, [4 ]];

const result_3 = arr.flat(3);
console.log(result_3);
// [1, 2, 3, 4]

// If we want to have the .flet() method to work on an infinite number of infinite arrays
const result_4 = arr.flat(Infinity);
console.log(result_4);
// [1, 2, 3, 4]