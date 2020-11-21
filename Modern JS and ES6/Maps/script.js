/* -------------------------------------------------------------------------- */
/*                                    MAPs                                    */
/* -------------------------------------------------------------------------- */

/* 
The Map object holds key-value pairs and remembers the original insertion (The addition of a new element) order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

When we need some sort of association between information and values then we need MAP.

Maps allow you to map arbitrary values to other values - Most importantly you can use objects as keys !!!

Problems that MAP solves: JS Objects only support one key object. If we add multiple key objects, it only remembers the last one !!!

The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
 */

let myMap = new Map([
    ['a1', 'Hallo'],
    ['b2', 'World']
]);

console.log(myMap);
// Map { 'a1' => 'Hallo', 'b2' => 'World' }

// add elements to map
myMap.set('c3', 'Goodbuy');
console.log(myMap);
// Map(3) {"a1" => "Hallo", "b2" => "World", "c3" => "Goodbuy"}

// delete element from map by the key
myMap.delete('a1');
console.log(myMap);
// Map(2) {"b2" => "World", "c2" => "Goodbuy"}

// chack size of elements in map
console.log(myMap.size); // 2