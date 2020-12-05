/* -------------------------------------------------------------------------- */
/*                           Pass by Referense in JS                          */
/* -------------------------------------------------------------------------- */

/* When you pass a variable to a function, the function is not creating a copy of what you passed. It is keeping a reference back to the original thing that you passed. 
If you make changes to the local variable in the function then you are really making the changes to the original thing that you sent to the function. */


/* ------------------------------- With Arrays ------------------------------ */

/* 
There are 2 ways to copy an original array: 
1) Array.from(arr);
2) [].concat(arr);
*/

let names = ['Bob', 'Louise', 'Tina', 'Linda', 'Gene'];

let f = function(arr){
    let a = Array.from(arr); // make/copy brand new array
    let r = [].concat(arr); // make/copy brand new array
    arr.push('Mort'); // push in original arrays - Affects original arrays
    a.push('Belcher'); // it doesn't affects original array, because a[] is a copy of names[]
    console.log(arr);
    console.log(names);
    console.log(a);
    console.log(r);
};

f(names); // names[] is original array and is affecting with .push() in function


/* ------------------------------ With Objects ------------------------------ */

/* 
   How to copy an original object: 
   let o = Object.assign({}, obj);
*/

let archer = {
    characters: ['Sterling', 'Pam', 'Lana', 'Mallory'],
    info:{inner:true, nums:[1,2,3]}
    };

let g = (obj) => {
    let o = Object.assign({}, obj);
    obj.characters = ['Slater', 'Sterling', 'Lana'];
    obj.characters.push('Cheryl');
    obj.info.inner = false;
    obj.info.nums = [4,5,6];
    
    //o.info = Object.assign({}, obj.info);
    
    log('OBJ', obj);
    log('ARCHER', archer);
    log('O', o);
    return o;
};

let newObj = g(archer);
newObj.characters.push('Cyril');
newObj.info.nums.push(8);
log('NEWOBJ', newObj);
log('ARCHER', archer);
