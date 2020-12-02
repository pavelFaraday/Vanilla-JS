/* -------------------------------------------------------------------------- */
/*                    Iterable vs Enumerable in JavaScript                    */
/* -------------------------------------------------------------------------- */


/* 
*** The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

SYNTAX:
Object.defineProperty(obj, prop, descriptor);

PARAMETRES:
* obj --- The object on which to define the property.
* prop --- The name or Symbol of the property to be defined or modified.
* descriptor --- The descriptor for the property being defined or modified.
*/

/* -------------------------------------------------------------------------- */

/* 
Iterable and Enumerable are different things in JavaScript.
When you add properties to an object they can be defined as enumerable or not.
Some object types like Arrays, Strings, Maps, Sets, and NodeLists also have Iterators which are objects that let you access certain values from the object.
*/

//  enumerable: true --- when you add new property/value to an object/array, if you do this with 'Object.defineProperty' method, by default it is 'enumerable: true'. And that means that when you do for..in loop, you get to see new added items. If you write 'enumerable: false' -- added items will not be shown. ENUMERABLE means, when you are doing using a for..in loop you are looping through all the properties that are enumerable/countable.

// Iterator only provides just the values that are inside objects/arrays, NOT new added ones !!!

// Objects are not iterable, we can't use For..of loop with them !!!!  It works with arrays, strings, node lists !!!







let names = ['Gendalf', 'Gilgo', 'Makos', 'Pintio', 'Parabo'];
names.elf = 'Legolas';
Object.defineProperty(names, 'ent', 
                    {value: 'TreeBeard',
                    enumerable: true});


let middleEarth = {
    'towns': ['Hongkong', 'Washingto'],
    'races': ['Elves', 'Hobbits, Men']
};
middleEarth.creator = 'J. Tolkien';
Object.defineProperty(middleEarth, 'age',
                    {value: '3rd',
                    enumerable: false});



/* --------------------------------- For..in -------------------------------- */

for (let p in names) {
    console.log('for..in loop in names: ', p);
}
console.log('\n');

/* 
in names:  0
in names:  1
in names:  2
in names:  3
in names:  4
in names:  elf
in names:  ent */

/* --------------------------------- for..of -------------------------------- */

for(let p2 of names) {
    console.log('for..of loop in names: ', p2);
} 
console.log('\n');

/* 
for..of loop  Gendalf
for..of loop  Gilgo
for..of loop  Makos
for..of loop  Pintio
for..of loop  Parabo */

// 'elf' and 'ent' doesn't shown!!!
// Because, new added items in objects/arrays are enumerable, but NOT Iterable !!!

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


/* --------------------------------- for..in -------------------------------- */

for (let X in middleEarth) {
    console.log('for..in loop in middleEarth: ', X);
}
console.log('\n');

/* 
for..in loop in middleEarth:  towns
for..in loop in middleEarth:  races
for..in loop in middleEarth:  creator */


/* --------------------------------- for..of -------------------------------- */

for (let Y of middleEarth) {
    console.log('for..of loop in middleEarth: ', Y);
}
console.log('\n');

//  ERROR...  middleEarth is not iterable!
//  Object don't have iterators by default. that lets you loop through the object !!!
