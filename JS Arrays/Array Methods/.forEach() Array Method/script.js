/* -------------------------------------------------------------------------- */
/*                            .forEach() array Method                         */
/* -------------------------------------------------------------------------- */

// .forEach() array Method executes a given function on every element from an array. 

const numbers = [1,2,3,4,5];
numbers.forEach((item) => {
    console.log(item);
});
// 1,2,3,4,5


/* -------------------------------------------------------------------------- */

const numbers_2 = [11,22,33,44,55];
numbers_2.forEach((item, index, arr) => {
    console.log(`a[${index}] = ${item}`);
});

/* 
a[0] = 11
a[1] = 22
a[2] = 33
a[3] = 44
a[4] = 55
*/

/* -------------------------------------------------------------------------- */

const numbers_3 = [13,23,33,43,53];
numbers_3.forEach((item, index, arr) => {
    console.log(arr);
});

/* 
[ 13, 23, 33, 43, 53 ]
[ 13, 23, 33, 43, 53 ]
[ 13, 23, 33, 43, 53 ]
[ 13, 23, 33, 43, 53 ]
[ 13, 23, 33, 43, 53 ] 
*/

/* -------------------------------------------------------------------------- */

const numbers_4 = [5,10,100,125];
let sum = 0;
numbers_4.forEach(item => {
    sum += item;
});

console.log(sum); // 240

/* -------------------------------------------------------------------------- */

const letters = ['a', 'a', 'c', 'd', 'e', 'd', 'a'];
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count);
// { a: 3, c: 1, d: 2, e: 1 }







