/* -------------------------------------------------------------------------- */
/*                Pure and Higher-Order Functions in JavaScript               */
/* -------------------------------------------------------------------------- */



/*******************************
PURE functions
1. Given the same input will always return the same output - if you pass a number to a function, you can call this function million times, as long as you are passing the same number you are getting the same response back.
2. Have no side effects (Only access the data that is passed to it.)

HIGHER-ORDER functions
1. May accept functions as parameters, returns a function from another function
2. Will return a function
*******************************/


/* ------------------------- HIGHER-ORDER functions ------------------------- */

let higher = function(f){
    let _output = f();
    return _output;  // if _output is a function
};

let x = function(){
    console.log('x');
    return function(){
        console.log('x return value');
    };
};
higher(x);



/* ----------------------------- Pure function ---------------------------- */


let str = 'Some String';

let f_pure = function(_input){
    let _output = _input.toUpperCase();
    return _output;
};

let out = f_pure(str);
console.log(out, str);

// SOME STRING Some String
// It is pure function, because it has no side effects: it didn't changed variable oustside a scope/function (str)


/* ----------------------------- Impure function ---------------------------- */

let str2 = 'My String';

let f_impure = function(_input){
    let _output = _input.toUpperCase();
    str2 = _output; // side-effect
    return _output;
};

let output = f_impure(str2);
console.log(output, str2);

// MY STRING MY STRING 
// It is impure function, because it has side effect: it has changed variable oustside a scope/function (str2)


