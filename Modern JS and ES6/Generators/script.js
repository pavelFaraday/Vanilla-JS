/* -------------------------------------------------------------------------- */
/*                                 Generators                                 */
/* -------------------------------------------------------------------------- */

// LESSON -- https://www.youtube.com/watch?v=Ojis8iFIjDQ&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=11

// With Generators we return multiple values just from one function
// Generators are just functions, which we can play and pause whenever we want. So, that we can have ultimate controle over the flow of them.
// if we put asterisk sign before the function keyword we make generator.
// We must assign generator function to variable.
// myGen.next(); --- means 'PLAY'.
// yield --- means 'PAUSE'.

function* gen() {
    yield console.log('peach');
    yield console.log('apple');
    yield console.log('lemon');
    console.log('All done');
}

// We must assign generator function to variable.
var myGen = gen();

myGen.next();
myGen.next();
myGen.next();
myGen.next();