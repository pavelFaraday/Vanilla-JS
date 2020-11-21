/* -------------------------------------------------------------------------- */
/*                        Destructing / dismantle Objects                     */
/* -------------------------------------------------------------------------- */

// Destructuring is a JavaScript expression that makes it possible to unpack/split values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to individual variables.

let employee = {
    fName: 'Namoroto',
    lName: 'Kapura',
    gender: 'Male'
};

let {
    fName,
    lName,
    gender
} = employee;

console.log(fName); // Namoroto
console.log(lName); // Kapura
console.log(gender); // Male

/* -------------------------------------------------------------------------- */

// If Property names are huge and we don't want use such big variable names - We can use aliases. But before doing this, we cant't use variable names and we have use only alias names !

let user = {
    personfirstName: 'Paliando',
    personLastName: 'Dorges',
    personGender: 'female'
};

let {
    personfirstName: fn,
    personLastName: ln,
    personGender: g
} = user;

console.log(fn); // Paliando
console.log(ln); // Dorges
console.log(g); // female