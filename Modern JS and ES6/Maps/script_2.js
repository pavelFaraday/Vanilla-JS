/* 
When we need some sort of association between information and values then we need MAP.

Maps allow you to map arbitrary values to other values - Most importantly you can use objects as keys !!!

Problems that MAP solves: JS Objects only support one-key object. If we add multiple key objects, it only remembers the last one !!!

*/




//  Problem Example with Objects:

let myObj = {};

let a = {};
let b = {};

myObj[a] = 'Andro';
console.log(myObj);
// { '[Object Object]': 'Andro' }


myObj[b] = 'Barxo';
console.log(myObj);
// { '[Object Object]': 'Barxo' } --- Thats means problem: object a is overwritten by object b; 


/* -------------------------------------------------------------------------- */

//  Problem solving with MAP:

let C = {};
let D = {};

let myMap = new Map([
    [C, 'Carlo'],
    [D, 'Dato']
]);

console.log(myMap);
// Map { {} => 'Carlo', {} => 'Dato' }


