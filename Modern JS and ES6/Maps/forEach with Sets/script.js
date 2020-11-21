// How forEach Loop works with Sets

let mySet = new Set([1, 2, 3]);

mySet.forEach(SetFunction);
function SetFunction(value, key, callingSet) {
    console.log(`${key} ${value}`);
    console.log(mySet === callingSet);  // true
}
