// for..of loops
// for..of versus for..in loops
// for..of loop skips 'supernatural[prop]' steps...

let supernatural = { 
    "actors":['Jared Padelecki', 'Jensen Ackles', 'Mark Sheppard', 'Misha Collins'],
    "characters":['Sam Winchester', 'Dean Winchester', 'Crowley', 'Castiel'],
    "seasons":12 };

/* ------------------------------ for..in loop ------------------------------ */

for (let prop in supernatural){
    console.log(prop, supernatural[prop]);
}

/* 
actors [
  'Jared Padelecki',
  'Jensen Ackles',
  'Mark Sheppard',
  'Misha Collins'
]
characters [ 'Sam Winchester', 'Dean Winchester', 'Crowley', 'Castiel' ]
seasons 12
*/

for (let prop in supernatural.actors){
    console.log(prop, supernatural.actors[prop]);
}

/* 
0 Jared Padelecki
1 Jensen Ackles
2 Mark Sheppard
3 Misha Collins
*/

/* ------------------------------ for..of loop ------------------------------ */

for (let name of supernatural.actors){
    console.log(name);
}

/* 
Jared Padelecki
Jensen Ackles
Mark Sheppard
Misha Collins
*/
