/* -------------------------------------------------------------------------- */
/*                           .isArray() Array Method                          */
/* -------------------------------------------------------------------------- */

// Array.isArray() Array Method checks if the passed value is an array

const names = ['Florin', 'Banhir', 'John'];
const str = 'I am Robot';
const number = 17;

const result = Array.isArray(names);
console.log(result); // true

const result_2 = Array.isArray(str);
console.log(result_2); // false

const result_3 = Array.isArray(number);
console.log(result_3); // false