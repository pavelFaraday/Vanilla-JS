let firstname = "Chandler";
let lastname = "Bings";

let person = {
    firstname,
    lastname
};

//console.log(person.firstname);
//console.log(person.lastname);


/* -------------------------------------------------------------------------- */
/*                            Objects in Functions                            */
/* -------------------------------------------------------------------------- */

function createPerson(firstname, lastname, age) {
    let fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname,
        fullname,
        isSenior() {
            return age > 60;
        }
    };
}

let p = createPerson("Ross", "Geller", 62);
console.log(p.firstname); // Ross
console.log(p.lastname); // Geller
console.log(p.fullname); // Ross Geller
console.log(p.isSenior()); // false