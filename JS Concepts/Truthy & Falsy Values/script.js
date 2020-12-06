/* -------------------------------------------------------------------------- */
/*                            Truthy & Falsy Values                           */
/* -------------------------------------------------------------------------- */

// null, undefined, 0, false, '', "", NaN ---- These values will be interpreted into if..else, while loop, ternary operators as FALSY values !

// null - there is no value !
// undefined - declared variable that has no value assigned!
// 0 - a number 0 is a falsy value, every other number would be considered as 'true'.
// '', "" - every empty string would be considered as 'false'.



let es = '';
let z = 0;
let n = null;
let u = undefined;
let f = false;
let i = NaN;

if (es || z || n || u || f) {
    console.log('The true part');
} else {
    console.log('The false part'); // es, z, n, u, f --- all these will be falsy !
}
