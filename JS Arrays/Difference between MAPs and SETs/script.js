/* 
Maps are similar to Objects. Sets are similar to Arrays. Both provide you with Iterators which means that both can be used with a for...of loop.
Plain JavaScript Objects are not Iterable.
You can pass an Array directly into a Set using the constructor.
For Objects you need to loop through the properties and pass them to a Map one at a time.
*/

/*******************************************
Maps - Like Objects they have keys and values
    (unique keys)
    .size
    .set(key, value)
    .delete(key)
    .get(key)
    .has(key)
    .keys() - returns Iterator with array of keys
    .values() - returns Iterator with array of values
    .entries() - returns Iterator with array of [key, value]
    .clear()
    .forEach()
Sets - Like Arrays they have values
    (unique values) - remove non-unique values from array
    .size
    .add(value)
    .delete(value)
    .entries() - returns Iterator with array of [value, value]
    .values() - returns Iterator with array of values
    .has(value)
    .clear()
    .forEach()
********************************************/

let obj = {
    prop1: 123,
    prop2: 'abc'
};
obj.prop2 = 'def';
console.log( obj);

//let map = new Map(obj); //fails - Objects are not iterable
let map = new Map();
map.set('prop1', 123);
map.set('prop2', 'abc');
map.set('prop2', 'def');
console.log(map);

let names = ['Rob', 'Bran', 'Arya', 'Sansa', 'Rickard'];
names.push('Rob');
let set1 = new Set(names);
//easy way to remove duplicates from an Array
console.log(names);
console.log(set1);