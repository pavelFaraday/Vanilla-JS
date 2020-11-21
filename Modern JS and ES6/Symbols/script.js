/* -------------------------------------------------------------------------- */
/*                                   Symbols                                  */
/* -------------------------------------------------------------------------- */

/* 
The data type symbol is a primitive data type.

Every symbol value returned from Symbol() is unique.

The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry.

The purpose of symbol is to generate a unique ID, but the funny thing is that we never get access to that ID. 

The purpose of symbols is to use them in object properties - to create unique property inside of object; So, we never have to warry about our code conflicting with existing methods or being accidentally overwritten, because this property (['fname']) is always going to be UNIQUE;

*/

let smb = Symbol('My First Symbol');
console.log(typeof smb); // symbol
console.log(smb.toString()); // Symbol(My First Symbol)


/* -------------------------------------------------------------------------- */

// symbol always creates a unique ID, ('Test' is ID) therefor 's1' doesn's equals 's2'... 
let s1 = Symbol('Test');
let s2 = Symbol('Test');
console.log(s1 === s2);  // false

/* -------------------------------------------------------------------------- */

// 'Chandler' is description/Key.
// Symbol.for('Chandler') -- Returns a Symbol object from the global symbol registry matching the given key if found. It checks if a symbol with the key - 'Chandler', already exists in the registry. Otherwise, returns a new symbol with this key. Now both symbols (s3, s4) are same;

// method Symbol.for()
let s3 = Symbol.for('Chandler');
let s4 = Symbol.for('Chandler');
console.log(s3=== s4);  // true

// method Symbol.keyFor() --- it finds symbol description/Key
console.log(Symbol.keyFor(s4));  // 'Chandler'  


/* -------------------------------------------------------------------------- */

// The purpose of symbols is to use them in object properties - to create unique property inside of object; So, we never have to warry about our code conflicting with existing methods or being accidentally overwritten, because this property (['fname']) is always going to be UNIQUE;

let fname = Symbol();
let person = {
    ['fname']: 'Pino'
};

console.log(Object.getOwnPropertyNames(person));   // [ 'fname' ]
console.log(Object.getOwnPropertySymbols(person));   // [Symbol]