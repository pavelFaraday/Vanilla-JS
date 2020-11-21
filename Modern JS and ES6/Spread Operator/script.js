/* -------------------------------------------------------------------------- */
/*                                Spread Operator                             */
/* -------------------------------------------------------------------------- */

// It takes an array and split them into individual elements. 
// It's an oppozite of REST parameter.
// Spread operator is just three dots and we put it in front of the arra, that was spread.

// before sread operator: (3) ["ham", "salam", "hamburger"]
// after spread operator: ham salam hamburger
// It's been taken out of the array and we see those three elements separately. 

window.onload = function () {
    var meats = ['ham', 'salam', 'hamburger'];
    console.log(...meats); // ham salam hamburger
};



/* --------------------------- How Can We Use SPREAD Operator? -------------------------- */

// 1) To add/consolidate first Array elemnts to another array elements:
window.onload = function () {
    var num1 = [1, 2, 3];
    var num2 = [...num1, 4, 5, 6];
    console.log(num2); // [1, 2, 3, 4, 5, 6]
};



// 2) pass/insert array elements into function parametres
window.onload = function () {
    var nums = [3, 5, 7];

    function addNums(a, b, c) {
        console.log(a + b + c);
    }

    addNums(...nums); // 15
};