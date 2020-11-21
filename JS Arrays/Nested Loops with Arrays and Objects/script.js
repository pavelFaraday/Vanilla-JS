/* ---------------------------- Nested For Loops with Arrays ---------------------------- */

let twoD = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 10, 5, 7, 3, 22, 6, 42],
    [123, 54, 12, 11, 9, 15]
];

for (let i = 0; i < twoD.length; i++) {
    console.log(i, twoD[i].length);
    for (let j = 0; j < twoD[i].length; j++) {
        console.log(twoD[i][j]);
    }
}

/* 
0 7     1 2 3 4 5 6 7
1 8     8 10 5 7 3 22 6 42
2 6     123 54 12 11 9 15 
*/


/* ---------------------------- Nested For Loops with Objects ---------------------------- */

let bigHero = { 
    characters: [
        {name:'Hiro', voice:'Ryan Potter'},
        {name:'Baymax', voice:'Scott Adsit'},
        {name:'Go Go Tamago', voice:'Jamie Chung'},
        {name:'Fred', voice:'T.J. Miller'}
    ]
};

let chars = bigHero.characters;
for (let i = 0; i < chars.length; i++) {
    // console.log(`${chars[i].name} - ${chars[i]['voice']}`);
/* 
Hiro - Ryan Potter
Baymax - Scott Adsit
Go Go Tamago - Jamie Chung
Fred - T.J. Miller 
*/
    for (let hero in chars[i]) {
        console.log(`${hero} - ${chars[i][hero]}`);
    }
}

/* 
name - Hiro
voice - Ryan Potter
name - Baymax
voice - Scott Adsit
name - Go Go Tamago
voice - Jamie Chung
name - Fred
voice - T.J. Miller 
*/




