/* -------------------------------------------------------------------------- */
/*              Chaining Array Methods and Using Arrow Functions              */
/* -------------------------------------------------------------------------- */


let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

//Two step version
let replicants = people.filter((person) => {
   return person.email.indexOf("@replicant.io") > -1;
});
let names = replicants.map((person) => {
   return person.name; 
});
console.log("List of replicant names:", names);
// List of replicant names: [ 'Roy Batty', 'Pris' ]

/* -------------------------------------------------------------------------- */


// Chain version
let replicantNames = people.filter((person) => {
    return person.email.indexOf("@replicant.io") > -1;
}).map((person) => {
    return person.name;
});

console.log("List of replicant names:", replicantNames);
// List of replicant names: [ 'Roy Batty', 'Pris' ]