// yield -- To give way; to allow another to pass first. 
// next() -- from yield until next yield: 
// done: false === unfinish
// done: true === Finish (No more yields!)

/*  
        next
         |
         V
yield 1 
        next
         |
         V
console.log ("After 1st yield"); 
yield 2;
        next 
         |
         V
console.log("After 2st yield");
yield 3;
        next 
         |
         V
  FINISH (done: true)
*/

function *createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
    console.log("After 2st yield");
    yield 3;
}

let myGen = createGenerator();
console.log(myGen.next()); 
// { value: 1, done: false }
console.log(myGen.next());
// After 1st yield
// { value: 2, done: false }
console.log(myGen.next());
// After 2st yield
// { value: 3, done: false }
console.log(myGen.next());
// { value: undefined, done: true }






/* -------------------------------------------------------------------------- */
/*                            Purpose of Generators                           */
/* -------------------------------------------------------------------------- */

let person = {
    fname: "Chandler",
    lname: "Bing"
};

person[Symbol.iterator] = function*(){
let properties = Object.keys(person);
    for (let t of properties){
        yield this[t];
    }
};

for (let p of person){
    console.log(p);
}

// Chandler
// Bing
