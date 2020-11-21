/* -------------------------------------------------------------------------- */
/*                                   Modules                                  */
/*                               1) Named Exports                             */
/* -------------------------------------------------------------------------- */

/*
Modules are chapters/sections of hole big code for understanding the progression of code and to easily find specific part, that codders are interested in. 

If we have a function in 'module B' -> to use it in 'module A', We export from 'module B' and import in 'module A'; Thats the basic idea of modules - export and import.

There are 2 ways of exports: 1) named exports, 2) default exports.

VARIABLES IMPORTS ARE READ ONLY - YOU CAN NOT CHANGE IMPORTED VARIAVBLE VALUES !!!
OBJECT IMPORTS ARE ONLY CHANGEBLES - You can only change object properties values !!!

*/





/* ------------------------------ Single named export ----------------------------- */

export let frame = 'Chandler';
export let lname = 'Bing';

/* -------------------------- Collapsing named export -------------------------- */

let name_1 = 'name1';
let name_2 = 'name2';
let name_3 = 'name3';
let name_4 = 'name4';
let name_5 = 'name5';
let name_6 = 'name6';
let name_7 = 'name7';

export {name_1, name_2, name_3, name_4, name_5, name_6, name_7};

/*  Alices */

let user_1 = 'Banger_1';
let user_2 = 'Banger_2';
let user_3 = 'Banger_3';
let user_4 = 'Banger_4';

export {user_1, user_2, user_3, user_4};



