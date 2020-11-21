/* -------------------------------------------------------------------------- */
/*                            .find() Array Method                            */
/* -------------------------------------------------------------------------- */

// .find() Array Method will search inside of an array and it will return the first element for which the callback function returns true value. If it doesn't find one then it will return undefined. 

const names = ['Florin', 'Ivan', 'Michel'];

const findIvan = names.find((item) => {
    return item === 'Ivan';
});

console.log(findIvan); // Ivan

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

const michel = people.find((person) => {
    return person.name === 'Michel';
}).age; 

console.log(michel); // 16