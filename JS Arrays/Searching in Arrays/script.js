/* -------------------------------------------------------------------------- */
/*                             Searching in Arrays                            */
/* -------------------------------------------------------------------------- */

/* 
There are a variety of ways that you can search in JavaScript Arrays for specific values or properties.
*/

// Finding matches in Arrays
// call method and get a single value
// 1) Array.includes( searchedElement [, fromIndex]) --- returns Boolean
// 2) Array.indexOf( searchedElement [, fromIndex]) --- returns -1 or index of first match

// LOOP and return a single value - provides opportunity for more detailed match
// Array.some( callBack [, thisArg]) --- returns Boolean
// Array.find( callBack [, thisArg]) --- returns value from Array or undefined

let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Gus', 'Todd', 'Badger', 'Pete'];

// 1. Find out if 'Todd' or 'Steve' is in the Array
let bool_todd = names.includes('Todd');
console.log(bool_todd); // true
let bool_steve = names.includes('Steve');
console.log(bool_steve); // false

// 2. Find out what positions in the Array are 'Gus' or 'Tuco'
let pos = names.indexOf('Gus');
console.log(pos); // 3
let pos_tuco = names.indexOf('Tuco');
console.log(pos_tuco); // -1

// 3. Find out whether anyone in the list has a capital letter 'M' in their name
let some = names.some(name => {
    if(name.indexOf('M') > -1){
        return true;
    }
});
console.log(some); // true

// 4. Find the first name in the list that is more than 5 characters plus after 'Walter'
let find = names.find(name => {
    if(name.length > 5) {
        return name;
    }
});
console.log(find);  // Walter