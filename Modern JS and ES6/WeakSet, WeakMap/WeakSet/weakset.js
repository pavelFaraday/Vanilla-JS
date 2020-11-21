/* -------------------------------------------------------------------------- */
/*                    Difference between SET and WeakSet                   */
/* -------------------------------------------------------------------------- */

// SET Example:

let mySet = new Set();
let key = {};
mySet.add(key);
console.log(mySet.size);  // 1

key = null;
console.log(mySet.size); // 1 --- It still 1. This is wrong! Set does't exist key object, because we set key to null!


/* -------------------------------------------------------------------------- */

// WeakSet Example:

let myWeakSet = new WeakSet();
let key2 = {};
myWeakSet.add(key2);
console.log(myWeakSet.has(key2));  // true

key2 = null;
console.log(myWeakSet.size);  // undefined --- it's correct!