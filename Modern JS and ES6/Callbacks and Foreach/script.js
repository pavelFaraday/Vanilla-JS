/* -------------------------------------------------------------------------- */
/*                                  callbacks                                 */
/* -------------------------------------------------------------------------- */

// we can pass arguments into functions and methods, when we envoke them. and we can use those arguments inside the function. Also we can pass FUNCTIONS AS AN ARGUMENTS in a main function.And when we do this - the function we pass in is called a callback function. 

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});



/* -------------------------------------------------------------------------- */
/*                                   forEach                                  */
/* -------------------------------------------------------------------------- */
// foreach is a method that iterates over an array, like a loop 

// callback function in forEach Loop 
let people = ['mario', 'Givi', 'sandro', 'Mako', 'james'];

people.forEach((person) => {
    console.log(person);
}); // mario, Givi, sandro, Mako, james

/* -------------------------------------------------------------------------- */

// callback function in forEach Loop 
let logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);