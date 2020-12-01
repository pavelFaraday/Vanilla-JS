/************************************
What are destructive methods?  in-place
Destructive methods are methods that change original array.

Array.prototype.sort - destructive
Array.prototype.reverse - destructive
Array.prototype.splice - destructive

Array.prototype.slice - non-destructive shallow copy
Array.prototype.filter - non-destructive
Array.prototype.map - non-destructive
************************************/

let names = ['Archer', 'Laaaanaaaa', 'Cyril', 'Cheryl'];

let filtered = names.map( (item)=>{
    return item.toLocaleUpperCase();
});

console.log(1, filtered);
console.log(2, names);

let sorted = names.sort();
console.log(3, sorted);
console.log(4, names);