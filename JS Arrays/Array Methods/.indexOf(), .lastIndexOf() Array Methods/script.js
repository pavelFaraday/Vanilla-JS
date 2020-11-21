/* -------------------------------------------------------------------------- */
/*                 .indexOf() and .lastIndexOf() Array Methods                */
/* -------------------------------------------------------------------------- */

//  .indexOf() Method returns the first index at which a given element can be found inside array. It searchs from the beginnig of an array!
// .lastIndexOf() Method returns last index at which a given element can be found inside array. It searchs from the end of an array!
// returned result |-1| means, that element we searched not found, array doesn't exists it.

const names = ['Florin', 'Ivan', 'John'];
const index = names.indexOf('Ivan'); // 1
names[index] = 'Mario';
console.log(names);
// [ 'Florin', 'Mario', 'John' ]

/* -------------------------------------------------------------------------- */

if (index > -1) {
    console.log(`We found ${names[index]}`);
} else {
    console.log('No results!');
}
// We found Mario


/* ------------------------------- .lastIndexOf() ------------------------------- */

const newNames =  ['Mario', 'Kuba', 'Bross', 'Kuba', 'Jima'];
const firstIndex = newNames.indexOf('Kuba'); 
const lastIndex = newNames.lastIndexOf('Kuba'); 

console.log(firstIndex); // 1
console.log(lastIndex); // 3


