let p1 = new Promise((resolve, reject) => {
    let x = 5;
    // resolve(x); // calling this will call .then()
    reject(x); // calling this will call .catch() 
});

// x => ex => ox
p1.then((ex) => {
    console.log(ex); // 5
    return ex;
}).then((ox) => {
    console.log(ox * 10); // 50
}).catch((rx) => {
    console.log('caught', rx);
});

// catch block will run if 'reject' is callled, or if any .then() block will throw an error
