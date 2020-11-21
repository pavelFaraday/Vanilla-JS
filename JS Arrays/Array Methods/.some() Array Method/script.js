/* -------------------------------------------------------------------------- */
/*                            .some() Array Method                            */
/* -------------------------------------------------------------------------- */

// The .some() Array Method executes a given function on the elements of an array and returns true if the callback function returns a true value for at least one element inside of the array. If all of the elements of array will return false value, then .some() Method will return false also.

// .some() method will run on each element of an array only until it does find element we searched for.. Before this, it will stop doing enything.

// Opozite of .every() method 

const numbers = [1,2,3,4,5];
const result = numbers.some((item) => {
    return item > 4;
});
console.log(result);
// true

/* -------------------------------------------------------------------------- */

// .some() method will run on each element of an array only until it does find element we searched for.. Before this, it will stop doing enything.

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];

let keyword1 = 'Star';  //appears more than once, it is first element [0]
let keyword2 = 'Cake';  //appears once, it is 13th element [12]
let keyword3 = 'Max';   //not in list, [-1]

let test1 = movies.some(function(item, index){
    console.log(index, item);
    return  item.indexOf(keyword1) > -1  ;
});
// 0 'Star Wars'

let test2 = movies.some(function(item, index){
    console.log(index, item);
    return  item.indexOf(keyword2) > -1  ;
});

/* 
0 'Star Wars'
1 'Star Trek'
2 'Jaws'
3 'Jurassic Park'
4 'Gross Pointe Blank'
5 'Eternal Sunshine of the Spotless Mind'
6 'Memento'
7 'Dog Soldiers'
8 'The Host'
9 'Gran Torino'
10 'Close Encounters of the Third Kind'
11 'Good Will Hunting'
12 'Layer Cake'
*/

let test3 = movies.some(function(item, index){
    console.log(index, item);
    return  item.indexOf(keyword3) > -1  ;
});

/* 
0 'Star Wars'
1 'Star Trek'
2 'Jaws'
3 'Jurassic Park'
4 'Gross Pointe Blank'
5 'Eternal Sunshine of the Spotless Mind'
6 'Memento'
7 'Dog Soldiers'
8 'The Host'
9 'Gran Torino'
10 'Close Encounters of the Third Kind'
11 'Good Will Hunting'
12 'Layer Cake'
13 'Casino Royale'
14 'Almost Famous'
*/

/* -------------------------------------------------------------------------- */

const people = [
    {
        name: 'Ban',
        age: 25
    }, 
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Michel',
        age: 16
    }
];

const adults = people.some((person) => {
    return person.age >= 18;
});

console.log(adults);
