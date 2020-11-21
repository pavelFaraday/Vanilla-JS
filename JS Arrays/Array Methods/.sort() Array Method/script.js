/* -------------------------------------------------------------------------- */
/*                            .sort() Array Method                            */
/* -------------------------------------------------------------------------- */

// .sort() Array Method sorts elements of an array by manipulating an array.
// The default sort order is ascending - it will convert elements from the array to streams and the it will compare their sequences of utf-16 unit values.

/* -------------------------------------------------------------------------- */
// sort strings of array
const names = ['Blorin', 'Aiam', 'Xai, Ivan'];
names.sort();
console.log(names);
// [ 'Aiam', 'Blorin', 'Xai, Ivan' ]

/* -------------------------------------------------------------------------- */

// sort numbers
const numbers = [23,45,65,6,33,9,90];
numbers.sort();
console.log(numbers);
// [ 23, 33, 45, 6, 65, 9, 90 ]

/* -------------------------------------------------------------------------- */

// a, b --- elements which will be compared
const myNums = [23,45,65,6,33,9,6,90];

const compareFunction = myNums.sort((a, b) => {
    // 1. < 0 ... a comes first
    // 2. = 0 ... nothing will be changed
    // 3. > 0 ... b comes first
    return a - b;
});

console.log(compareFunction);
// [ 6, 6, 9, 23, 33, 45, 65, 90 ]

/* -------------------------------------------------------------------------- */

const products = [
    {
        name: 'notebook',
        price: 1000,
    }, 
    {
        name: 'TV',
        price: 1500,
    },
    {
        name: 'phone',
        price: 500,
    }
];

products.sort((a, b) => {
    return a.price - b.price;
});

console.log(products);

/* 
[ { name: 'phone', price: 500 },
  { name: 'notebook', price: 1000 },
  { name: 'TV', price: 1500 } ]
*/


