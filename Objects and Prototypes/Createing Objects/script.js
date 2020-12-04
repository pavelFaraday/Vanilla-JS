// 1) create object:
let emp1= {};
emp1.name = 'John';
emp1.surname = 'Falcone';
emp1.gender = 'female';
emp1.designation = 'Regional Manager';
console.log(emp1);

/* -------------------------------------------------------------------------- */

// 2) create object with function:
function user(name, surname, gender) {
    let newUser = {};
    newUser.name = name;
    newUser.surname = surname;
    newUser.gender = gender;
    return newUser;
}

let myUser = user('gorg', 'borxes', 'male');
console.log(myUser);

/* -------------------------------------------------------------------------- */

// 3) create object with Constructor function:
function Bysicle(speed, brand, weight) {
    this.speed = speed;
    this.brand = brand;
    this.weight = weight;
    this.inflateTires = function(){
        this.weight += 2;
    };
}

myBysicle = new Bysicle(120, 'Toyota', 59);
console.log(myBysicle);
console.log(myBysicle.inflateTires());

