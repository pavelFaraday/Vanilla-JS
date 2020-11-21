/* -------------------------------------------------------------------------- */
/*                                REST Parameter                              */
/* -------------------------------------------------------------------------- */

// The rest parameter allows us to represent an indefinite number of arguments as an single array.
// With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
// A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.
// By the Rest Parameter we can add any number of parameter without affecting the hole function.

let displayColors = function (message, ...colors) {
    console.log(message);

    for (let i in colors) {
        console.log(colors[i]);
    }
};

let message = "List of Colors";

displayColors(message, "Red");
displayColors(message, "Red", "Blue");
displayColors(message, "Red", "Blue", "Green");