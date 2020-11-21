/* -------------------------------------------------------------------------- */
/*                          .includes() Array Method                          */
/* -------------------------------------------------------------------------- */

// With .includes() Array Method you can find if the element is included inside an array

const names = ['Florin', 'Bob', 'John', 'Laura'];
const ifIncluded = names.includes('John');
console.log(ifIncluded); // true

/* -------------------------------------------------------------------------- */

const fruits = ['Mango', 'Apple', 'Orange'];
const favoriteFruit = fruits.includes('Apple');

if (favoriteFruit) {
    console.log('I have an Apple');
} else {
    console.log('I should buy an Apple');
}

// I have an Apple

/* -------------------------------------------------------------------------- */

let dwarves = ['Grumpy', 'Sneezy', 'Happy', 'Bashful', 'Happy', 'Dopey', 'Sleepy'];

let hasHappy = dwarves.includes('Happy', 2);
console.log("Does it contains 'Happy' after index 2? -", hasHappy);
// Does it contains 'Happy' after index 2? - true

let hasSneezy = dwarves.includes('Sneezy', 3);
console.log("Does it contains 'Sneezy' after index 3? -", hasSneezy);
// Does it contains 'Sneezy' after index 3? - false

