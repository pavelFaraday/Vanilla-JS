/* -------------------------------------------------------------------------- */
/*                             reduce Array Method                            */
/* -------------------------------------------------------------------------- */

// .reduce() array method executes the callback function on every element of an array and it will return one single output value/result. It is like getting an array of items and adding all of the items inside one resulting value; Basic idea of .reduce() array method is - you have an array of elements (strings, numbers, objects, nested arrays) and you want to compress them inside one returning value;

// 'accumulator' parameter keeps track of the value which will be returned at the end. And it will be initialize with the initial value we provide here.

// https://www.youtube.com/watch?v=IXp06KekEjM&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&index=4

// array.reduce(callback, initialValue)
// also has a second parameter which is an initialValue

/* -------------------------------------------------------------------------- */
// initial/starting Value = 0; 
const numbers = [1,2,3,4,5];
const total = numbers.reduce((accumulator, item) => {
    return accumulator + item;
}, 0);

console.log(total);  // 15

/* -------------------------------------------------------------------------- */

const nums = [10,2,3,47,5,689,7];
const maximum = nums.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

console.log(maximum); // 689

/* -------------------------------------------------------------------------- */

const products = [
    {
        name: 'notebook',
        price: 1000,
        count: 3
    }, 
    {
        name: 'TV',
        price: 50,
        count: 8
    },
    {
        name: 'phone',
        price: 200,
        count: 5
    }
];

const totalValueStore = products.reduce((acc, item) => {
    return acc + (item.price * item.count);
}, 0);

console.log(totalValueStore); // 4400