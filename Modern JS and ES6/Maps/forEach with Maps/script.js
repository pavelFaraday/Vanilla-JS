// How forEach Loop works with Maps

let myMap = new Map([
    ['John', 'Chandler'],
    ['Ban', 'Malkoy']
]);

myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(`${key} ${value}`);
    console.log(myMap === callingMap);  // true
}

