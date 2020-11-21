/* -------------------------------------------------------------------------- */
/*                      Custom Array Sorts in JavaScript                      */
/* -------------------------------------------------------------------------- */

/* 
This video discusses how you can run sorts on Arrays of Numbers or Arrays of Objects to get the proper results.
The problem with the default Array.sort method is that it converts everything to Strings before doing its comparison.
We can create our own custom sort function to handle non-string sorts.
*/

//Array custom sort() function
let log = console.log;

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];
let numbers = [40,16,67,345,22,23,142,63,59,283];
let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Aoy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"B.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Xris", "email":"pris@replicant.io"}
];

//the problem with numbers
log( movies.sort() );  //ok
log( numbers.sort() );  //NOT ok

//the solution - using a custom sort
let sortedNum = numbers.sort( (a, b)=>{
    log( 'sorting', a, b);
    if( a > b) return 1;
    else if(b > a) return -1;
    else return 0;
} );
log(sortedNum);

//sorting array of objects - using a custom sort
//sort by person name
let sortedPeople = people.sort( (a, b) => {
    if( a.name > b.name) return 1;
    else if(b.name > a.name) return -1;
    else return 0;
} );
log( sortedPeople );