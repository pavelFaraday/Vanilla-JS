/* -------------------------------------------------------------------------- */
/*                                   WeakSet                                  */
/* -------------------------------------------------------------------------- */

/*
WeakSet objects are collections of objects, it stores object references. Just as with Sets, each object in a WeakSet may occur only once; all objects in a WeakSet's collection are unique. 

The main differences to the Set object are:
1) WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as Sets can.
2) The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.
*/

let carWeakSet = new WeakSet();

let car1 = {
    made: 'Honda',
    Model: 'Civic'
};

carWeakSet.add(car1);

let car2 = {
    made: 'BMW',
    Model: 'raf4'
};

carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);


/* -------------------------------------------------------------------------- */
/*                                   WeakMap                                  */
/* -------------------------------------------------------------------------- */

/*
The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

Keys of WeakMaps are of the type Object only !!! Primitive data types as keys are not allowed !!!
*/

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
};

let car4 = {
    made: 'Honda',
    Model: 'Civic'
};

let key2 = {
    id: 1
};

let car5 = {
    made: 'Mersedes',
    Model: 'AMG'
};

carWeakMap.set(key1, car4);
carWeakMap.set(key2, car5);
console.log(carWeakMap);

/*
WeakMap {
    object {id: 1} => object {made: 'Honda', Model: 'Civic'}, 
    object {id: 2} => object {made: 'Mersedes', Model: 'AMG'}
}
*/

carWeakMap.delete(key1);
console.log(carWeakMap);
/*
WeakMap {
    object {id: 2} => object {made: 'Mersedes', Model: 'AMG'}
}
*/