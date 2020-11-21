/* -------------------------------------------------------------------------- */
/*                                Math Objects                                */
/* -------------------------------------------------------------------------- */

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); // 8
console.log(Math.floor(area)); // 7 - Rounds to the nearest low integer
console.log(Math.ceil(area)); // 8 - Rounds to the nearest high integer

const num = 6.3;
console.log(Math.trunc(num)); // 6 - Takes away decimal and leaves integer


/* -------------------------------------------------------------------------- */
/*                           Generate Random Numbers                          */
/* -------------------------------------------------------------------------- */

const random = Math.random();
console.log(random); // number from 0 until 1,  0.04388151464613266
console.log(Math.round(random)); // 1 or 0
console.log(Math.round(random * 100)); // number from 1 until 100