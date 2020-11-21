/* -------------------------------------------------------------------------- */
/*                            .join() Array Method                            */
/* -------------------------------------------------------------------------- */

// .join() Array Method creates new string from an array by concatenating all the elements from that array; 
// By default it is 'comma' separator, but you can specify what separator you want to be added between the items

// The split() method is used to split a string into an array of substrings, and returns the new array.

// String => Array --- String.split()
// Array => String --- Array.join()

/* -------------------------------------------------------------------------- */

const countries = ['Russia', 'USA', 'Bangladesh'];

const result = countries.join();
console.log(result);
// Russia,USA,Bangladesh

const result_2 = countries.join(', ');
console.log(result_2);
// Russia, USA, Bangladesh

const result_3 = countries.join(' - ');
console.log(result_3);
// Russia - USA - Bangladesh

const result_4 = countries.join(' -> ');
console.log(result_4);
// Russia -> USA -> Bangladesh

const result_5 = countries.join(', ');
console.log(`I want to visit ${result_5}`);
// I want to visit Russia, USA, Bangladesh



/* --------------------------- Split() VS .join() --------------------------- */
/* ------------------- String => Array | String.split() ------------------- */

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



