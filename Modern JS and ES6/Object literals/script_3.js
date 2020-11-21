// We can use variables as a property names:

let ln = "last name";
let User = {
    "first name": "Chandler",
    [ln]: "Bing"
};

console.log(User["first name"]); // Chandler
console.log(User); // {first name: "Chandler", last name: "Bing"}