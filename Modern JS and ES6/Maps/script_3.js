/* 
When we need some sort of association between information and values then we need MAP.
Maps allow you to map arbitrary values to other values - Most importantly you can use objects as keys. 
*/ 

// Example 1:

let myMap = new Map();
myMap.set('John', 'Chandler');
myMap.set('Ban', 'Malkoy');

console.log(myMap.get('John')); // Chandler

/* -------------------------------------------------------------------------- */

// Example 2:

let obj_USA = {
    'User': 'Garfild',
    'Mail': 'Milko@gmail.com'
};

let obj_RUS = {
    'User': 'Ivan',
    'Mail': 'Gabixoev@mail.ru'
};

myMap.set(obj_USA, 'USA Soldier');
myMap.set(obj_RUS, 'RUSSIAN Soldier');

console.log(myMap.get(obj_USA)); // USA Soldier
console.log(myMap.get(obj_RUS)); // RUSSIAN Soldier