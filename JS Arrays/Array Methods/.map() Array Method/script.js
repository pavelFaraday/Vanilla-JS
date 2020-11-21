/* -------------------------------------------------------------------------- */
/*                              Map Array Method                              */
/* -------------------------------------------------------------------------- */

// .map() array Method executes a given function from an array and returns a new array.
// .map() will do the same thing as the forEach method. Difference is that fopEach is affecting the original array. | .map() doesn't changes original array !
// It doesn't changes original array - it will give us back new array

const numbers = [1,2,3,4,5];

let mappedArray = numbers.map((item) => {
    return item;
});

let mappedArray_2 = numbers.map((item) => {
    return item * 2;
});

/* -------------------------------------------------------------------------- */

const names = ['Balio', 'Valo', 'Kalima'];

let mappedArray_3 = names.map((item) => {
    return item.length;
});


console.log(numbers); // [ 1, 2, 3, 4, 5 ] --- it didn't changed original array!!!
console.log(mappedArray);  // [ 1, 2, 3, 4, 5 ] --- new Array
console.log(mappedArray_2);  // [ 2, 4, 6, 8, 10 ] --- new reproductive array
console.log(mappedArray_3); // [ 5, 4, 6 ]

/* -------------------------------------------------------------------------- */

const products = [
    {
        name: 'notebook',
        price: 1000,
        count: 23
    }, 
    {
        name: 'TV',
        price: 450,
        count: 8
    },
    {
        name: 'phone',
        price: 200,
        count: 5
    }
];

let tottalProductsValue = products.map((item) =>  
    item.price * item.count
);

console.log(tottalProductsValue);
// [ 23000, 3600, 1000 ]

/* -------------------------------------------------------------------------- */

const products_2 = [
    {
        name: 'Book',
        price: 9,
        count: 10
    }, 
    {
        name: 'Ruller',
        price: 3,
        count: 4
    },
    {
        name: 'Pencil',
        price: 0.5,
        count: 6
    }
];

let tottalProductsValue_2 = products_2.map((item) => ({
    name: item.name,
    total_Value: item.price * item.count
}));

console.log(tottalProductsValue_2);
/* 
[ { name: 'Book', total_Value: 90 },
  { name: 'Ruller', total_Value: 12 },
  { name: 'Pencil', total_Value: 3 } ] 
*/


/* -------------------------------------------------------------------------- */

// We can convert an array of string numbers to an array of numbers

const string = ['1','2','3','4','5'];
const number = string.map((item) => 
    Number(item)
);
console.log(number);
// [ 1, 2, 3, 4, 5 ]