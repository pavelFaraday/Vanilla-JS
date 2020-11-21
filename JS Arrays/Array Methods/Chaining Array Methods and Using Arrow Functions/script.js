/* -------------------------------------------------------------------------- */
/*              Chaining Array Methods and Using Arrow Functions              */
/* -------------------------------------------------------------------------- */

// Arrays of Objects
// Efficiently combining and chaining Array methods and Arrow functions
// person.email.indexOf("@replicant.io") > -1
// Find the names of all the people who have "replicant.io" emails

let people = [
    {
        "id":123,
        "name":"Rick Deckard",
        "email":"rick@bladerunner.org"
    },
    {
        "id":456,
        "name":"Roy Batty",
        "email":"roy@replicant.io"
    },
    {
        "id":789,
        "name":"J.F. Sebastian",
        "email":"j.f@tyler.com"
    },
    {
        "id":258,
        "name":"Pris",
        "email":"pris@replicant.io"
    }
];

//Two step version - old version
let replicants = people.filter(function(person){
   return person.email.indexOf("@replicant.io") > -1;
}); 

console.log(replicants);
/* 
[ { id: 456, name: 'Roy Batty', email: 'roy@replicant.io' },
  { id: 258, name: 'Pris', email: 'pris@replicant.io' } ]
*/
let names = replicants.map(function(person){
   return person.name; 
});
console.log("List of replicant names:", names);
// List of replicant names: [ 'Roy Batty', 'Pris' ]
/* -------------------------------------------------------------------------- */

//chain the two steps
let replicants_2 = people.filter(function(person){
   return person.email.indexOf("@replicant.io") > -1;
}).map(function(person){
    return person.name;
});

console.log("List of replicant names:", replicants_2);
/* -------------------------------------------------------------------------- */

//arrow function version
let replicants_3 = people
    .filter((person) => person.email.indexOf("@replicant.io") > -1)
    .map((person) => person.name );

console.log("List of replicant names:", replicants_3);
// List of replicant names: [ 'Roy Batty', 'Pris' ]