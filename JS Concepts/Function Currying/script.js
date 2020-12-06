/* -------------------------------------------------------------------------- */
/*                        JavaScript Function Currying                        */
/* -------------------------------------------------------------------------- */

/* 
Function currying is a technique that is only possible in JavaScript because functions are first-class objects. This means that they can be passed to a function as a parameter AND they can be returned from a function. You can pass a function to another function and you can have a function that returns a function from it.
*/

/* -------------------------------------------------------------------------- */

/*
function x(a){
    console.log('*x*');   // ---- will write to console
    a();                  // ---- will execute function y
    return a;             // ---- will return y function into b()
}

function y(){
    console.log('_y_');
}

x(y);  // *x* _y_ --- Function Currying - You can pass a function to another function

let b = x(y);
b(); // _y_
*/

/* -------------------------------------------------------------------------- */


function great(msg){
    return function(name){
        console.log(msg, name);
    };
}

let english = great('Hello');
let svenska = great('Hej');
let espanol = great('Holla');
let deutch = great('Tag');

english('Tom');      // Hello Tom
svenska('Inga');     // Hej Inga
espanol('Carlos');   // Holla Carlos
deutch('Mattias');   // Tag Mattias