let colors = ['Red', 'Blue', 'Green'];

/* -------------------------------------------------------------------------- */
/*                                for..in Loop                                */
/* -------------------------------------------------------------------------- */

for (let index in colors) {
    console.log(colors[index]);
}

/*
Red
Blue
Green
*/

/* -------------------------------------------------------------------------- */
/*                                for..of Loop                                */
/* -------------------------------------------------------------------------- */

for (let color of colors) {
    console.log(color);
}

/*
Red
Blue
Green
*/


/* ---------------------- For..of loop with strings ---------------------- */

let letters = "ABC D EF";

for (let letter of letters) {
    console.log(letter);
}

/*
A
B
C
 
D
 
E
F
*/