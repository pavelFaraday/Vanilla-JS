/* -------------------------------------------------------------------------- */
/*             Object methods - keys(), values(), entries()                   */
/* -------------------------------------------------------------------------- */

// All these methods let you turn an object into iterable object.  
// Iterable objects are an array, strings, node lists, maps, sets, argument keywords inside the function (they all have length, indexes and etc. An object doesn't have all these..). With iterable objects we can use For..of loops, ForEach loops, filter(), map(), reduce(), etc...

// For..of loop was designed mainly for iterable objects...

/**********************************
Object.keys(obj) - it gives us an array that contains all of the keys;
Object.values(obj) - it gives us an array that contains all of the values;
Object.entries(obj) - it gives us an array that contains all of the hole entries;

All three methods will create an iterable Object (Array) from the Object that you can then use in conjunction with other Array and iterable methods.
**********************************/

let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
};
 
/* ---------------------------- Object.keys(obj) ---------------------------- */

let keys = Object.keys(westeros);
console.log('Keys', keys);
/* 
Keys [
  'cersei',   'arya',
  'jon',      'brienne',
  'daenerys', 'theon',
  'jorah',    'margaery',
  'sandor',   'samwell',
  'ramsay'
] 
*/

/* --------------------------- Object.values(obj) --------------------------- */

let vals = Object.values(westeros);
console.log('Values', vals);
/* 
Values [
    'Lannister', 'Stark',
    'Snow',      'Tarth',
    'Targaryen', 'Greyjoy',
    'Mormont',   'Tyrell',
    'Clegane',   'Tarly',
    'Bolton'
] 
*/

/* --------------------------- Object.entries(obj) -------------------------- */

let entries = Object.entries(westeros);
console.log('All Entries', entries);
/* 
All Entries [
  [ 'cersei', 'Lannister' ],
  [ 'arya', 'Stark' ],
  [ 'jon', 'Snow' ],
  [ 'brienne', 'Tarth' ],
  [ 'daenerys', 'Targaryen' ],
  [ 'theon', 'Greyjoy' ],
  [ 'jorah', 'Mormont' ],
  [ 'margaery', 'Tyrell' ],
  [ 'sandor', 'Clegane' ],
  [ 'samwell', 'Tarly' ],
  [ 'ramsay', 'Bolton' ]
]
*/

console.log(entries[2][1]);
// Snow




