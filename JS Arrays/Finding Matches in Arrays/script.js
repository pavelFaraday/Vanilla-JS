/* -------------------------------------------------------------------------- */
/*                          Finding Matches in Arrays                         */
/* -------------------------------------------------------------------------- */

// Array.prototype.indexOf()   //returns index number
// Array.prototype.contains()  //returns boolean
// Array.prototype.filter()    //returns array
// Array.prototype.some()      //returns boolean

// find the element in Array
let names = ['Archer', 'Lana', 'Cyril', 'Pam', 'Cheryl'];
let pos = names.indexOf('Pam');
console.log(pos, '-', names[pos] ); // 3 - Pam

// remove the element from an Array
names.splice(pos, 1);
console.log(names);
// [ 'Archer', 'Lana', 'Cyril', 'Cheryl' ]

/* -------------------------------------------------------------------------- */

let movies = [
    {id:1, title:'Shaun of the Dead'},
    {id:2, title:'Man Up'},
    {id:3, title:'Terminal'},
    {id:4, title:'The End of the World'},
    {id:5, title:'Hot Fuzz'},
    {id:6, title:'Mission Impossible: Fallout'}
];

let manUp = {id:2, title:'Man Up'};
pos = movies.indexOf(manUp);
console.log('Man Up in position', pos);
// Man Up in position -1

/* ------------------------------- find With filter() ------------------------------ */

let matchingMovie = movies.filter( (obj) => {
    if(obj.id === manUp.id){
        return true;
    }
    return false;
});
console.log( matchingMovie[0]);
// { id: 2, title: 'Man Up' }


/* ------------------------------- find With some() ------------------------------ */

let found = movies.some( (obj, index) => {
    if(obj.id === manUp.id){
        pos = index;
        return true;
    }
    return false;
});

// console.log(found.toString());  // true
console.log(movies[pos]);
// { id: 2, title: 'Man Up' }
