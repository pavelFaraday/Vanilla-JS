// Use SETs to remove all dublicated values from array - we only need create new Set and pass an array there.

// We can easily turn SET back to array with ...spread operator.

// Differences between SETs and Arrays: an array is a ordered lists of objects. You can access elements of an array by referencing its index. But SET is an unordered pool of unique elements. Since it is unordereed there is no index you can use to access a specific element of SET.

const myArray = [1,2,3,4,5,5,2,3,2]; // create new array
const mySet = new Set(myArray); // create new Set 
const uniqueArr = [...mySet]; // use ...spread operator to return on array

console.log(myArray);
// [ 1, 2, 3, 4, 5, 5, 2, 3, 2 ]
console.log(mySet);
// Set { 1, 2, 3, 4, 5 }
console.log(uniqueArr);
// [ 1, 2, 3, 4, 5 ]
