/* -------------------------------------------------------------------------- */
/*                       Avoiding Duplicate Array Values                      */
/* -------------------------------------------------------------------------- */

// Want to output the values from an array in a random order without duplication?
// Want to add new random values to an array without adding duplicates?

// duplicates.js
// 1. removing duplicate values from an array
// 2. generating an array without duplicates

let names = ['John', 'Paul', 'George', 'Ringo'];

for(let i=0, tempnames=names, len=names.length; i<len; i++){
    let rnd = Math.floor(Math.random() * tempnames.length);
    console.log( tempnames[rnd] ); 
    tempnames.splice(rnd, 1);
}


/* -------------------------------------------------------------------------- */


let nums = [63, 69, 72, 88, 92, 93, 96, 98];

console.log('\n');
let min = 50;
let max = 100;
let range = max - min;
for(let i=0; i<9; i++){
    let rnd = Math.floor( Math.random() * range) + min;
    //nums.push(rnd);
    //console.log( nums.sort() );
}

while( nums.length < 17 ){
    let rnd = Math.floor( Math.random() * range) + min;
    if( !nums.includes(rnd) ){
        nums.push(rnd);
        console.log( nums.sort() );
    }else{
        console.log('skipped duplicate');
    }
}