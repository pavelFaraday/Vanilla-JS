/* -------------------------------------------------------------------------- */
/*                            .every() Array Method                           */
/* -------------------------------------------------------------------------- */

// .every() Array Method executes a given function on every items of an array and returns true only if the callback function returns a true value for all the imes inside an array, if the false value is found will return false immediately.

// The Array.isArray() method determines whether the passed value is an Array

/* -------------------------------------------------------------------------- */

const numbers = [1,2,3,4,5];

const trueResult = numbers.every((item) => {
    return item > 0;
});
console.log(trueResult); 
// true

const falseResult = numbers.every((item) => {
    return item < 1;
});
console.log(falseResult); 
// false

/* -------------------------------------------------------------------------- */

const persons = [
    {
        name: 'Ivan'
    },
    {
        name: 'Xorxe'
    },
    {
        name: 'John'
    }
];

const res = persons.every((person) => {
    return person.name !== undefined;
});

console.log(res); 
// true

/* -------------------------------------------------------------------------- */

const myArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// The Array.isArray() method determines whether the passed value is an Array
const newResult = myArray.every((arr) => {
    return Array.isArray(arr);
});

console.log(newResult);
// true
