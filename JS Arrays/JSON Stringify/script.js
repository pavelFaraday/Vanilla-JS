// json-stringify.js
// The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified

let obj = {name: "Walter", 
           last: "Sobchak",
           age: 50, 
           angry: true, 
           bestscore: 200, 
           armed: true};

let str = JSON.stringify(obj);
console.log(str);

// if we have big object and want extract few things from it, we can do it like array filter.
str = JSON.stringify(obj, ['name', 'angry', 'armed']);
console.log('\n', str);
/* {"name":"Walter",
    "angry":true,
    "armed":true} */


/* -------------------------------------------------------------------------- */
// We can replace values 

function replace(key, val) { 
    if (typeof val === 'string') {
        return 'STRING';
    } else {
        return val;
    }
}
str = JSON.stringify(obj, replace);
console.log('\n', str);

/*  {"name":"STRING",
    "last":"STRING",
    "age":50,
    "angry":true,
    "bestscore":200,
    "armed":true}  */

/* -------------------------------------------------------------------------- */

// We can filter values with 'undefined'..
// We can change 'string' to 'boolean', or 'number', with any type we want to remove from object

function filter(key, val) { 
    if (typeof val === 'string') {
        return undefined;
    } else {
        return val;
    }
}
str = JSON.stringify(obj, filter);
console.log('\n', str);
/*   {"age":50,
     "angry":true,
     "bestscore":200,
     "armed":true} */


/* -------------- add spaces/caharacters to extracted object ------------- */

// add 4 Spaces
str = JSON.stringify(obj, null, 4);
console.log('\n', str);
/*  
{
    "name": "Walter",
    "last": "Sobchak",
    "age": 50,
    "angry": true,
    "bestscore": 200,
    "armed": true
} 
*/

// add 4 tabs ('\t')
str = JSON.stringify(obj, null, '\t\t\t\t');
console.log('\n', str);
/*  
{
				"name": "Walter",
				"last": "Sobchak",
				"age": 50,
				"angry": true,
				"bestscore": 200,
				"armed": true
} 
*/

// add '$^$ --- ' characters
str = JSON.stringify(obj, null, '$^$ --- ');
console.log('\n', str);
/* 
{
$^$ --- "name": "Walter",
$^$ --- "last": "Sobchak",
$^$ --- "age": 50,
$^$ --- "angry": true,
$^$ --- "bestscore": 200,
$^$ --- "armed": true
}
*/

// add variable to extracted obj
let myVeb = 'Hello ';

str = JSON.stringify(obj, null, myVeb);
console.log('\n', str);
/* 
{
Hello "name": "Walter",
Hello "last": "Sobchak",
Hello "age": 50,
Hello "angry": true,
Hello "bestscore": 200,
Hello "armed": true
}
*/