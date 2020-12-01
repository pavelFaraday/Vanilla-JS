/* -------------------------------------------------------------------------- */
/*                           Pass by Referense in JS                          */
/* -------------------------------------------------------------------------- */

/* When you pass a variable to a function, the function is not creating a copy of what you passed. It is keeping a reference back to the original thing that you passed. 
If you make changes to the local variable in the function then you are really making the changes to the original thing that you sent to the function. */

/* 
there are 2 ways to copy an array: 
1) Array.from(arr);
2) [].concat(arr);
*/


let names = ['Bob', 'Louise', 'Tina', 'Linda', 'Gene'];

let f = function(arr){
    let a = Array.from(arr);
    let r = [].concat(arr);
    arr.push('Mort');
    a.push('Belcher');
    console.log(arr);
    console.log(names);
    console.log(a);
    console.log(r);
};

f(names);