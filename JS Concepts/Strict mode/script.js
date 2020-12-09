/* -------------------------------------------------------------------------- */
/*                         strict mode vs sloppy mode                         */
/* -------------------------------------------------------------------------- */

// sloppy mode is not real thing. It just describes the way JS is very flexible especially for beginners. You can do lots of things (some weird syntax, uncorrect code, errors) and it will let you get away with it.
// With the command "use strict" at the top of your file, or into the function you can protect yourself from common typos and errors. It forces you to be a better programmer. Things that would silently fail are no longer going to work, it will give you an ERROR.

/* 
"use strict";

    OR

function f(){
    "use strict";
}
*/


/* -------------------------------------------------------------------------- */
// "use strict";

// neverDeclared = 123; 
// var NaN = 123; // TypeError in the browser
// var undefined = 123;

//Silent Failure
let obj = {
  a: 123,
  b: 0,
  get x() {
    return this.b;
  }
};
Object.defineProperty(obj, "c", {
  value: 456,
  writable: false
});
//obj.x = 47; // cannot without the setter
//obj.c = 789;
//console.log(obj.c);
Object.seal(obj); //.freeze() .preventExtensions()
//delete obj.c;

//function dup(a, b, c, a) {} //SyntaxError

function f1() {}

function f1(a, b) {} //allowed. Overwriting the first function

var f1 = function() {};
f1 = function(a, b) {};

let f2 = function() {};
f2 = function(a, b) {}; //FAILS. because we used let