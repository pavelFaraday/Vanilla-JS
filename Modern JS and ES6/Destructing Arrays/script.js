/* -------------------------------------------------------------------------- */
/*                        Destructing / dismantle Arrays                        */
/* -------------------------------------------------------------------------- */

// Destructuring is a JavaScript expression that makes it possible to unpack/split values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

let employee = ['Chandler', 'Bran', 'Male'];
let [firstName, lastName, Gender] = employee;

/*
'Chandler' is assigned to firstName variable   |    'Chandler' =>  firstName
'Bran' is assigned to lastName variable        |    'Bran'     =>  lastName
'Male' is assigned to Gender variable          |    'Male'     =>  Gender
*/

console.log(firstName); // Chandler
console.log(lastName); // Bran
console.log(Gender); // Male


/* -------------------------------------------------------------------------- */

// If we just want to save only 'Male' element into Gender_2 variable, we can ommit other unnecesserry variables at the left side (firstName, lastName) and leave only commas instead of the removed variables..

let user = ['John', 'Traversy', 'Male'];
let [, , Gender_2] = user;
console.log(Gender_2); // Male

/* -------------------------------------------------------------------------- */

//  We can also destruct arrays with REST Operator..
// The REST operator helps us to have a single variable/array that can contain/save a group of elements
// ['Kikzu', 'Female'] => elements 

let employee_3 = ['Bahama', 'Kikzu', 'Female'];
let [firstName_3, ...elements] = employee_3;

console.log(firstName_3); // Bahama
console.log(elements); // [ 'Kikzu', 'Female' ]

/* -------------------------------------------------------------------------- */
//  We can also destruct arrays with default values


let employee_4 = ['Brighu', 'Laborsky'];
let [firstName_4, lastName_4, Gender4 = 'Male'] = employee_4;

console.log(firstName_4); // Brighu
console.log(lastName_4); // Laborsky
console.log(Gender4); // Male