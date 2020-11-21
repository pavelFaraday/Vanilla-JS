/* -------------------------------------------------------------------------- */
/*                                   CLASSES                                  */
/* -------------------------------------------------------------------------- */


// Constructors are methods that will run, when your class is instantiated/when object is created.
// Properties are just variables of a class.
// Methods are just functions that belongs to class.
// Static method doesn't nead to instatiate class. We can call it directly --- User.countUsers();



class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log('There are 50 users');
    }

    register() {
        console.log(this.username + ' is now registered');
    }
}

// 1) instantiate/create new object
var bob = new User('bob', 'bob@email.com', '12345');
// 2) call 'register' method
bob.register();

//User.countUsers();

/* -------------------------------------------------------------------------- */
/*                                 Inheritance                                */
/* -------------------------------------------------------------------------- */

/*
super(username, email, password) 

        <- MEANS ->

this.username = username;
this.email = email;
this.password = password; 


It's a short version.
*/

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(this.username + ' is subscribed to the ' + this.package + ' package');
    }
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Standard');

mike.getPackage(); // mike is subscribed to the Standard package
mike.register(); // mike is now registered