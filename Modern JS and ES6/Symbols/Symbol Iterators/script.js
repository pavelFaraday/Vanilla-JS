// for..Of loop with strings, Arrays, numbers and objects

let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj = {name:"Chandler"};

console.log("For string - " + typeof str[Symbol.iterator]);  // For string - function - Works for..of Loop with strings
console.log("For array - " + typeof arr[Symbol.iterator]);  // For array - function - Works for..of Loop with Arrays
console.log("For number - " + typeof num[Symbol.iterator]);  // For number - undefined - Doesn't works for..of Loop with nums
console.log("For object - " + typeof obj[Symbol.iterator]);  // For object - undefined - Doesn't works for..of Loop with objects


/* -------------------------------------------------------------------------- */


//  How make object Iterable...

let person = {
    fname: "Chandler",
    lname: "Bing"
};

person[Symbol.iterator] = function(){
    let properties = Object.keys(person);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count>=properties.length){
            isDone = true;
        }
        return{done: isDone, value: this[properties[count++]]};
    }
    return {next};    
};

for (let p of person){
    console.log(p);
} 

// Chandler
// Bing