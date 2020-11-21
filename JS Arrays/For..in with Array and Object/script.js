/* -------------------------------------------------------------------------- */
/*                                   For..in Loop                             */
/* -------------------------------------------------------------------------- */

/* ------------------------ For..in Loop with objects ----------------------- */

let monsters = {
    Canada: 'Sasquatch',
    Nepal: 'Yeti',
    Georgia: 'Devi'
};

for (let prop in monsters) {
    console.log(`${prop} - ${monsters[prop]}`);
}

/* 
Canada - Sasquatch
Nepal - Yeti
Georgia - Devi
*/


/* ------------------------ For..in Loop with Arrays ----------------------- */

let pets = ["dog", "cat", "horse"];
for (let pet in pets) {
    console.log(`index ${pet} - ${pets[pet]}`);
}

/*
index 0 - dog
index 1 - cat
index 2 - horse
*/
