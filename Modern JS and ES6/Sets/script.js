/* -------------------------------------------------------------------------- */
/*                                    Sets                                    */
/* -------------------------------------------------------------------------- */


/*  
Use SETs to remove all dublicated values from array - we only need create new Set and pass an array there.

We can use SETs, to store a set of unique values of whatever type you want. If we add the same value, the second value will be ignored and will not appear in the console/screen! What SET do - it eliminate dublications !

We can add any type of values/datas to sets: primitives(strings, booliens, numbers..) and objects/arrays too.

Differences between SETs and Arrays: an array is a ordered lists of objects. You can access elements of an array by referencing its index. But SET is an unordered pool of unique elements. Since it is unordereed there is no index you can use to access a specific element of SET.

There are a lot of different methods that we can use on SETs 
*/



var names = new Set();

// 1) -- add -- method
names.add('Peter').add('Gorge').add('Crystal').add('Gorge').add({
    1: 'buka',
    2: 'nakashidze'
});
console.log(names); // Set(3) {"Peter", "Gorge", "Crystal"} --- it eliminate dublications (Gorge)

// loop thrue SET
names.forEach(function (val) {
    console.log(val);
});

/*
Peter
Gorge
Crystal
{ '1': 'buka', '2': 'nakashidze' }
*/

// 2) -- size -- method
console.log(names.size); //  3

// 3) -- has -- method
console.log(names.has('Peter')); //  true
console.log(names.has('John')); //  false

// 4) -- delete -- method
names.delete('Peter');
console.log(names); // Set(2) {"Gorge", "Crystal"}

// 5) -- clear -- method
names.clear();
console.log(names); // Set(0) {}


/* -------------------------------------------------------------------------- */
/*                              SETs With Arrays                              */
/* -------------------------------------------------------------------------- */

// For eliminate dublications, We cant turn an array into SETs
var members = ['Lado', 'Niko', 'Barbi', 'Lorem', 'Mafola', 'Lorem', 'Jadika', 'Barbi'];

var eliminatedMembers = new Set(members);
console.log(eliminatedMembers); // Set(6) {"Lado", "Niko", "Barbi", "Lorem", "Mafola", …}

members = [...eliminatedMembers];
console.log(members); // (6) ["Lado", "Niko", "Barbi", "Lorem", "Mafola", "Jadika"]