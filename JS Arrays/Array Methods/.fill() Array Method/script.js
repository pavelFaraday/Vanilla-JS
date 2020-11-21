/* -------------------------------------------------------------------------- */
/*                           .fill() Array Method                           */
/* -------------------------------------------------------------------------- */

// .fill() Array Method changes all the elements inside an array with the provided value.
// It modifies original array too !!!

/* -------------------------------------------------------------------------- */

// change all elements with 0
const numbers = [1,2,3,4,5];
let num2 = numbers.fill(0);
console.log(numbers); // [ 0, 0, 0, 0, 0 ] --- !!!
console.log(num2); // [ 0, 0, 0, 0, 0 ]

/* -------------------------------------------------------------------------- */

const myNums = [5,6,7,8,9];
myNums.fill(89, 1, 4);
console.log(myNums);
// [ 5, 89, 89, 89, 9 ]

/* -------------------------------------------------------------------------- */

function fillInNumbers(n) {
    return Array(n)
        .fill(0)
        .map((_, index) => index + 1);
}
console.log(fillInNumbers(10));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]



