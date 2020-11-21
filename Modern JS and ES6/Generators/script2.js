/* -------------------------------------------------------------------------- */
/*                                      Generators                            */
/* -------------------------------------------------------------------------- */

// We must set generator function to a variable
// With Generators we return multiple values just from one function

function* g1() {
    console.log('Hello');
    yield('First yield');
    console.log('World');
    yield('Second yield');
    return 'Returned..';
}

// We must set generator function to a variable
let VarG = g1();

console.log(VarG.next());
// Hello
// {value: "First yield", done: false}

console.log(VarG.next());
// World
// {value: "Second yield", done: false}

// If we want that -- done: true -- we must end Generator function with 'return'
console.log(VarG.next());
// {value: "Returned..", done: true}



/* -------------------------------------------------------------------------- */
/*                                  Iterators                                 */
/* -------------------------------------------------------------------------- */


for (let val of VarG) {
    console.log(val);
}

/*
Hello
First yield
World
Second yield
*/