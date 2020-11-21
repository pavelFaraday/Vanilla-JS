/* -------------------------------------------------------------------------- */
/*                          .findIndex() Array Method                         */
/* -------------------------------------------------------------------------- */

// .findIndex() Array Method is very similar to the find method - it will find an element and  will return its index. 

const numbers = [1,2,3,4,5];

const findThree = numbers.findIndex((item) => {
    return item === 3;
});

console.log(findThree);  // 2