/* -------------------------------------------------------------------------- */
/*         JavaScript IIFE (Immediately Invoked Function Expressions)         */
/* -------------------------------------------------------------------------- */

/* 

IIFE - Immediately Invoked Function Expressions.

*/

// 1) -- function declaration --
function doSomething(){
    // Always needs 'return' statement
    return 123;
}
doSomething();

/* -------------------------------------------------------------------------- */

// 2) -- function Expression --
let somethingElse = function () {
    
};

/* -------------------------------------------------------------------------- */


// 3) -- Immediately Invoked Function --
let Immediately = (function(nm) {
    return {
        'name': nm,
        'id': 123,
        'x': function (){
            console.log('Hello');
        }
    };
})('Bob');

console.log(Immediately.name, Immediately.id); // Bob 123
console.log(Immediately.x()); // Hello