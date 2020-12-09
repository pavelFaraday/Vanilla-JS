/* -------------------------------------------------------------------------- */
/*                            Classes VS Prototypes                           */
/* -------------------------------------------------------------------------- */

/* 
It is important to understand that the class syntax is being interpreted as using the prototype syntax and that CLASSES do NOT exist in JavaScript.

 * Creating objects with Classes
 * Versus objects with prototypes
 * Since JavaScript is not a Class-based language
 * what is happening behind the class syntax?
 */

/* -------------------------------------------------------------------------- */
/*                                   Classes                                  */
/* -------------------------------------------------------------------------- */

/* Constructor function is the function that is running when you call to the function with 'new' keyword.
*  getDetails() method is being added to the prototype for this Constructor function.
*  So, we have a constructor function and we have it's prototype (getDetails()); 

                    
                        Prototype Scheme into Classes:

                                PersonC
                                   | 
             |--------------------^ ^--------------------|
             V                                           V
  constructor.prototype                        getDetails.prototype

-------------------------------------------------------------------------- 

                Class Constructor VS Constructor function:

constructor(nm, id) {                             function(nm, id) {
    this.name = nm;     ======================       this.name = nm;   
    this.id = id;                                    this.id = id; 
};                                                };


                Class Method VS Constructor Function Prototype:

getDetails() {                                        PersonP.prototype.getDetails = function() {
    return `${this.name} :: ${this.id}`;   =======        return `${this.name} :: ${this.id}`;
}                                                     };
                                                           
                                                        
  
*/

let PersonC = class {
    constructor(nm, id) {
      this.name = nm;
      this.id = id;
    }
    getDetails() {
      return `${this.name} :: ${this.id}`;
    }
};

let bob = new PersonC("Bob", 123);
console.log(bob.getDetails()); // Bob :: 123
  

/* Create brand new class 'EmployeeC' that extends 'PersonC' - 'EmployeeC' will use/access all the properties and methods of 'PersonC'. Everything that is inside a 'PersonC', well be available for the 'EmployeeC'.
*  'EmployeeC' prototype links to 'PersonC' prototype.
*  Constructor function belongs to 'EmployeeC' and is 'EmployeeC'-s prototype as well.
*  employeeInfo() - is the prototype of EmployeeC too.

 
                                 PersonC
                                    |
            |---------------------^ ^ ^-------------------|
            V                       |                     V
 constructor.prototype              |           getDetails.prototype
                                    |
                           EmployeeC.prototype
                                    |
             |---------------------^ ^-------------------|
             V                                           V
  constructor.prototype                      employeeInfo.prototype





                  Class Extends VS Constructor Function Prototype:

let EmployeeC = class extends PersonC {
constructor(nm, id, salary) {
    super(nm, id);
    this.salary = salary;
}
            ||
            ||
            ||
            ||
let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
};
Object.setPrototypeOf(EmployeeP.prototype, PersonP.prototype);
                        
---------------------------------------------------

                  Class Extends Method VS Constructor Function Prototype:

let EmployeeC = class extends PersonC {
    constructor(nm, id, salary) {
        super(nm, id);
        this.salary = salary;
    }
    employeeInfo() {
        return `${this.name} :: ${this.id} :: ${this.salary}`;
    }
};
                        ||
                        ||
                        ||
                        ||
let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
};
Object.setPrototypeOf(EmployeeP.prototype, PersonP.prototype);
 
EmployeeP.prototype.employeeInfo = function() {
     return `${this.name} :: ${this.id} :: ${this.salary}`;
};
                                    



*/

let EmployeeC = class extends PersonC {
constructor(nm, id, salary) {
    super(nm, id);
    this.salary = salary;
}
employeeInfo() {
    return `${this.name} :: ${this.id} :: ${this.salary}`;
}
};

let noomi = new EmployeeC("Noomi", 456, 8500000);
console.log(noomi.employeeInfo());

/* ***************************************************************************************** */
/* ***************************************************************************************** */
/* ***************************************************************************************** */
  



/* -------------------------------------------------------------------------- */
/*                                 Prototypes                                 */
/* -------------------------------------------------------------------------- */
  
  let PersonP = function(nm, id) {
    this.name = nm;
    this.id = id;
  };

  PersonP.prototype.getDetails = function() {
    return `${this.name} :: ${this.id}`;
  };
  let fred = new PersonP("Fred", 321);
  console.log(fred.getDetails(), fred.name);
  
  let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
  };

  Object.setPrototypeOf(EmployeeP.prototype, PersonP.prototype); 
  EmployeeP.prototype.employeeInfo = function() {
    return `${this.name} :: ${this.id} :: ${this.salary}`;
  };
  let mary = new EmployeeP("Mary", 654, 65000);
  console.log(mary.employeeInfo());