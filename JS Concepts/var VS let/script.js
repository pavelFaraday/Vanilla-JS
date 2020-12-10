/* -------------------------------------------------------------------------- */
/*                           var vs let                                       */
/* -------------------------------------------------------------------------- */


/* ----------------------------------- VAR ---------------------------------- */

console.log(v1); // undefined 
var v1;
var v1 = 6;
console.log(v1); // 6


/* ----------------------------------- LET ---------------------------------- */

// console.log(L1);      //  Cannot access 'L1' before initialization 
// let L1;               // Identifier 'L1' has already been declared
let L1 = 15;
console.log(L1);         // 15   


/* -------------------------------- Functions ------------------------------- */

// ---- function declaration ----

f(); // function f
function f() {
  console.log("function f");
}
f(); // function f




// ---- function expression ----

// fe();         //  ERROR -  Cannot access 'fe' before initialization
let fe = function() {
    let x = 'Hello';
    console.log(x);
};
fe();         // Hello
