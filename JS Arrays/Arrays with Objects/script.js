/*  
    Object {
        property: value,
        property: value
    } 
*/

// Objects
let dog = {
    name: 'Woody',
    type: 'dog'
};

let cat = {
    name: 'Bob',
    type: 'cat'
};

console.log(dog); // { name: 'Woody', type: 'dog' }
console.log(cat); // { name: 'Bob', type: 'cat' }


/* -------------------------------------------------------------------------- */

// Array with objects
let pets = [
    {
        name: 'Woody',
        type: 'dog'
    },
    {
        name: 'Bob',
        type: 'cat'
    }
];

console.log(pets);
/* 
[ { name: 'Woody', type: 'dog' }, 
  { name: 'Bob', type: 'cat' } ] 
*/

// or / In short with variables
let pets_2 = [dog, cat];


/* --------------------- How to add new object inside an array --------------------- */

pets.push({ name: 'Roxy', type: 'rabbit' });
console.log(pets);

/* 
[ { name: 'Woody', type: 'dog' },
  { name: 'Bob', type: 'cat' },
  { name: 'Roxy', type: 'rabbit' } ] 
*/

console.log(pets[2]);
// { name: 'Roxy', type: 'rabbit' }

/* --------------------- How to add new property to object inside an array --------------------- */

pets[0].age = 13;
pets[1].age = 2;
console.log(pets);

/* 
[ { name: 'Woody', type: 'dog', age: 13 },
  { name: 'Bob', type: 'cat', age: 2 },
  { name: 'Roxy', type: 'rabbit' } ]
*/

// Or otherwise

pets[0]["color"] = 67;
pets[1]["color"] = 78;
console.log(pets);

/* 
[ { name: 'Woody', type: 'dog', age: 13, color: 67 },
  { name: 'Bob', type: 'cat', age: 2, color: 78 },
  { name: 'Roxy', type: 'rabbit' } ] 
*/


/* ----- How update value and add new property to object inside an array ---- */

pets[1].type = 'horse';
pets[1].gender = 'male';
console.log(pets[1]);
// { name: 'Bob', type: 'horse', age: 2, color: 78, gender: 'male' }

console.log(pets);
/* 
[ { name: 'Woody', type: 'dog', age: 13, color: 67 },
  { name: 'Bob', type: 'horse', age: 2, color: 78, gender: 'male' },
  { name: 'Roxy', type: 'rabbit' } ]
*/









