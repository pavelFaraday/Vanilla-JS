
/* -------------------------- For Loop Components: -------------------------- */

/*
initialize - from which index starts looping (0 - Mario Kanvas);
test - until which index ends looping (until 3 ---> 3 < 4(names.length));
increment/decrement - i++ | i+=1 | i=i+1;
*/

/* --------------------------- Genereal Scheme of Looping: --------------------------- */

/*
for (let i = 0; 0 < 4; i++) {
    console.log(names[0]);
}
Mario Kanvas
                                ||
                                V
for (let i = 1; 1 < 4; i++) {
    console.log(names[1]);
}
Mario Kanvas
Brad Pit
                                ||
                                V
for (let i = 2; 2 < 4; i++) {
    console.log(names[2]);
}
Mario Kanvas
Brad Pit
Judy Low
                                ||
                                V
for (let i = 3; 3 < 4; i++) {
    console.log(names[3]);
}
Mario Kanvas
Brad Pit
Judy Low
Serxio Ramos
*/



let names = ['Mario Kanvas','Brad Pit', 'Judy Low', 'Serxio Ramos'];
let namesLength = names.length;


// 1.a) loop each element of array
for (let i = 0; i < namesLength; i++) {
    console.log(names[i]);
}

/* 
Mario Kanvas
Brad Pit
Judy Low
Serxio Ramos 
*/

// 1.b) the same with decrement backwards
for (let i = namesLength-1 ; i >= 0; i--) {
    console.log(names[i]);
}

/* 
Serxio Ramos
Judy Low
Brad Pit
Mario Kanvas
*/

// 2) loop every second element of array
for (let i = 0; i < namesLength; i+=2) {
    console.log(names[i]);
}

/* 
Mario Kanvas
Judy Low 
*/