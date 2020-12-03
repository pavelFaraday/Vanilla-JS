// ----- STRINGS -----
let str = 'Ragnar Lothbrok';
console.log(str[0], str[1]);
// R a
console.log(str.charAt(0), str.charAt(1));
// R a
str2 = str.concat(' is Here');
console.log(str2);
// Ragnar Lothbrok is Here



// ----- Arrays -----
let arr = str.split('');
let arr2 = Array.from(str);
console.log(arr, arr2);

/* 
[
  'R', 'a', 'g', 'n',
  'a', 'r', ' ', 'L',
  'o', 't', 'h', 'b',
  'r', 'o', 'k'
]
== SAME ==
[
  'R', 'a', 'g', 'n',
  'a', 'r', ' ', 'L',
  'o', 't', 'h', 'b',
  'r', 'o', 'k'
]
*/

arr3 = arr.concat(arr2);
console.log(arr3);

/* 
[
  'R', 'a', 'g', 'n', 'a', 'r',
  ' ', 'L', 'o', 't', 'h', 'b',
  'r', 'o', 'k', 'R', 'a', 'g',
  'n', 'a', 'r', ' ', 'L', 'o',
  't', 'h', 'b', 'r', 'o', 'k'
]
*/


// str.indexOf("g") //2   
// str.lastIndexOf("g") // 3
// arr.indexOf("R"); //0

// str.includes("R") //true 
// arr.includes("R") //true

// slice(begin, end) - extract / shallow copy of part of the array or string
// str.slice(1, 3) 
// arr.slice(1, 3) // ["a", "g", "n"]

for (let char of str) {
  console.log(char);
}

/* 
R
a
g
n
a
r
 
L
o
t
h
b
r
o
k
*/

for (let char of arr) {
  console.log(char);
}

/* 
R
a
g
n
a
r
 
L
o
t
h
b
r
o
k
*/