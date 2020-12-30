/* -------------------------------------------------------------------------- */
/*                           .concat() Array Method                           */
/* -------------------------------------------------------------------------- */

// .concat() Array Method allows you to merge/concatinate two different arrays into one new array.
// Original arrays will not be changed
/* -------------------------------------------------------------------------- */


const arr_1 = [1,2,3];
const arr_2 = [4,5,6,7];
const arr_3 = [8,9];

const mergedArr = arr_1.concat(arr_2, arr_3);
console.log(mergedArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/* -------------------------------------------------------------------------- */

// other way of cantination
const otherWay = [].concat(arr_1, arr_2, arr_3);
console.log(otherWay);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/* -------------------------------------------------------------------------- */

// We can add/push new elements into array
const pushedNew = arr_1.concat(45,100,800);
console.log(pushedNew);
// [ 1, 2, 3, 45, 100, 800 ]
