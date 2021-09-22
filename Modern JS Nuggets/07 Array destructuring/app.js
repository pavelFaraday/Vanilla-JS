// faster/easier way to access/unpack variables from arrays
// https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, , bob, anna, kelly, susan] = friends;

console.log(john, peter, bob);
console.log(john, peter, bob, anna, kelly);
console.log(john, peter, bob, anna, kelly, susan);
console.log(john, peter, bob, anna, kelly, susan);
// Swap Variables

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);


/* -------------------------------------------------------------------------- */
// Array destructuring - Simple example:
var thing = ["Table", "Chair", "Fan"];
var [a, b, c] = thing

console.log(a); // Output: Table
console.log(b); //Output: Chair
console.log(c); //Output: Fan

/* ---------------------- Destructuring Returned Arrays --------------------- */
function runners(){
    return ["Sandra", "Ola", "Chi"];
}

var [a, b, c] = runners();
console.log(a); //Output: Sandra
console.log(b); //Output: Ola
console.log(c); //Output: Chi