/* -------------------------------------------------------------------------- */
/*                             Filter Array Method                            */
/* -------------------------------------------------------------------------- */

// .filter() Array Method creates a new array by removing all the elements for the which the callback function returns falsy value; Consider it as a test of the items of an array - if the item from the array returns true for a callback then we keep it, otherwise we remove it;

const numbers = [1,2,3,4,5];
const even = numbers.filter((value) => {
    return value % 2 === 0;
});

console.log(even);
// [2, 4]

/* -------------------------------------------------------------------------- */

const people = [
    {
        name: 'John',
        age: 26
    },
    {
        name: 'Mathu',
        age: 18
    },
    {
        name: 'Lynda',
        age: 15
    }
];

const adults = people.filter((person) => {
    return person.age <= 18;
});

console.log(adults);
/* 
[ 
    { name: 'Mathu', age: 18 }, 
    { name: 'Lynda', age: 15 } 
]
*/

/* -------------------------------------------------------------------------- */
// The indexOf() method returns the position of the first occurrence of a specified value in a string/array.

const doubles = [1,5,2,3,2,5,4,2,3,6,4];
const uniques = doubles.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});
console.log(uniques);
// [ 1, 5, 2, 3, 4, 6 ]


/* -------------------------------------------------------------------------- */


let nums = [23, 45, 14, 66, 94, 33, 4, 9];
let breakPoint = 30;

let smallNumbers = nums.filter((num) => {
    return num < breakPoint;
});


let bigNumbers = nums.filter((num) => {
    return num > breakPoint;
});


let oddNumbers = nums.filter((num) => {
    return num % 2;
    //0, 1, 10, 11, 100, 101, 110, 111, 1000
    //0, 1, 2,  3,   4,   5,   6,   7,   8
    // return num & 1;
});

console.log(smallNumbers); // [ 23, 14, 4, 9 ]
console.log(bigNumbers); // [ 45, 66, 94, 33 ]
console.log(oddNumbers); // [ 23, 45, 33, 9 ]


