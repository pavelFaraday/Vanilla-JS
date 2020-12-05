/* -------------------------------------------------------------------------- */
/*                            Looping and Recursion                           */
/* -------------------------------------------------------------------------- */

// loop-recursion.js
// Looping vs. Recursion
// The repeat() method returns a new string with a specified number of copies of the string it was called on

/* let fetch = require('node-fetch');
let url = "http://jsonplaceholder.typicode.com/comments?postId=42";*/



let count = 0;
const SIZE = 30; 

// ------- Looping -------
console.log('Starting the loop');
for(let i=0; i<10; i++){
    console.log('inside loop', i);
}
console.log('Ended the loop');

/* 
Starting the loop
inside loop 0
inside loop 1
inside loop 2
inside loop 3
inside loop 4
inside loop 5
inside loop 6
inside loop 7
inside loop 8
inside loop 9
Ended the loop */


// ----- Recursion -----
let recky = function(){
    console.log('inside recky', count);
    count++;
    if(count<10){
        recky();
    }
};
console.log('Starting the recursion');
recky();
console.log('ending the recursion');

/* 
Starting the recursion
inside recky 0
inside recky 1
inside recky 2
inside recky 3
inside recky 4
inside recky 5
inside recky 6
inside recky 7
inside recky 8
inside recky 9
ending the recursion */

// ------ -- -- Recursion for countdowns ------ -- --
let countdown = function(size){
    console.log('x'.repeat(size));
    size = Math.floor(size * 0.95);
    if(size > 2){
        countdown(size);
    }
};
countdown(SIZE);

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
xxxxxxxxxxxx
xxxxxxxxxxx
xxxxxxxxxx
xxxxxxxxx
xxxxxxxx
xxxxxxx
xxxxxx
xxxxx
xxxx
xxx
 */



//Asynchronous methods
// AJAX, Database, Promises, Timers...
/* 
console.log('about to fetch');
for(let c=0; c<2; c++){
    let d = fetch(url)
    .then(response=>response.json())
    .then(data => { console.log('data', JSON.stringify(data) ); });
    console.log(c, d);
}
console.log('after fetch???');

 */