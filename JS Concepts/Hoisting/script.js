/* -------------------------------------------------------------------------- */
/*                                 JS Hoisting                                */
/* -------------------------------------------------------------------------- */

// Hoisting is a process by which JS understands what your file is trying to do. When the file is first read by JS, it will find all of the variables in all of the functions and hoists them all to the very top of the page. And it does this, so can understand what are the variables and functions are going to be used at some point in the page. But, when they get hoisted to the top they are all given the value of 'undefined'. 

/*
But not _Function_Declarations_ are given 'undefined' ! - We can call/use them everywhere. 

            --- function c() {} --- 
*/

/* _Function_Expression_ we declare with variable names, so we can't call them everywhere, we can call them only after the function assignment !

            --- var e = function(){}; ---
*/



/* -------------------------------------------------------------------------- */

var a;
var b = 4;

console.log(d); // undefined

c(); // function declaration - this function works anywhere.
function c() {
    console.log("function declaration - this function works anywhere");
}

var d = 5;
console.log(d); // 5

// e(); // ERR - e is not a function

var e = function(){
    console.log('function expression - this function works/calls only down the function');
};

e(); // function expression - this function works/calls only down the function'
