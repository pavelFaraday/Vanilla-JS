/* -------------------------------------------------------------------------- */
/*                   String.split() and Array.join() Methods                  */
/* -------------------------------------------------------------------------- */


// Converting Strings to arrays and arrays to strings
// String => Array --- String.split()
// Array => String --- Array.join()

// .join() Array Method creates new string from an array by concatenating all the elements from that array;
// The split() method is used to split a string into an array of substrings, and returns the new array.


/* ------------------- String => Array |  String.split() ------------------- */

let sentense = 'Hallo, my name is Giorgi Barxos';

let words = sentense.split(' ');
console.log(words);
// [ 'Hallo,', 'my', 'name', 'is', 'Giorgi', 'Barxos' ]

let chars = sentense.split(' name ');
console.log(chars);
// [ 'Hallo, my', 'is Giorgi Barxos' ]

let newSentense = 'I am Jon';
let letters = newSentense.split('');
console.log(letters);
// [ 'I', ' ', 'a', 'm', ' ', 'J', 'o', 'n' ]


/* -------------------- Array => String | Array.join() -------------------- */

let hyphenated = words.join(' ');
console.log(hyphenated);
// Hallo, my name is Giorgi Barxos
