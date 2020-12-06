/* -------------------------------------------------------------------------- */
/*                          Logical Short-Circuiting                          */
/* -------------------------------------------------------------------------- */

/* 
Short-Circuiting is a behavior that's built into JS. Whenever you evaluating anything and you use && (AND) oparator between the things you evaluating.

null, undefined, 0, false, '', "", NaN ---- FALSY values

Example: Here I,m saying take the number 1 and then I want to consider another/second number 1. If this is true, it will go ahead and evaluate the second number --->. If this is false, than it's not going to ever get to it ----> X; This is Short-Circuiting. It reads from left to right and it only continues as long as everything it finds is true. As soon as it hits something tha is false it stoops reading/evaluating.

    -> -> -> -> -> X
if (1 && 1 && 1 && 0 && 1) {}

### Functions that do not have 'return' statement wll by default return 'undefined'

*/

if (0 && 1) {
   console.log('true');    
} else {
   console.log('false'); // false
}


(1 && 1) ? console.log('true') : console.log('false');  // true

/* -------------------------------------------------------------------------- */

let obj = { 
    prop: 42,
    boolean: true
};

let num = 42;
let f = () => {
    return num;
};

let num2 = 0;
let f2 = () => {
    return num2;
};

let g = () => {
    console.log(1090);
};

// (obj.prop > 40 && obj.boolean === true) ? console.log('true') : console.log('false'); // true

// (obj.boolean === true && num) ? console.log('Yes') : console.log('No'); // Yes

// (obj.boolean === true && f) ? console.log('Yes') : console.log('No'); // Yes

(obj.boolean === true && f2()) ? console.log('Yes') : console.log('No'); // No --- beceause num2 = 0; and 0 is evaluated as FALSY value
(obj.boolean === true && g()) ? console.log('Yes') : console.log('No----'); // No---- Because Functions that do not have 'return' statement wll by default return 'undefined'


