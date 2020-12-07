/* -------------------------------------------------------------------------- */
/*                           Closures and Factories                           */
/* -------------------------------------------------------------------------- */


function series(seriesName) {
    return function (newMovie) { 
        var msg = `<p> A new part has been added to <b> ${seriesName} </b> called '${newMovie}' </p>`;
        document.querySelector('#output').innerHTML += msg;
    };
}

var newStarWars = series('Star Wars');
newStarWars('Time for Leps');
// A new part has been added to Star Wars called 'Time for Leps'

var newHarryPotter = series('Harry Potter');
newHarryPotter('Strange Stone');
// A new part has been added to Harry Potter called 'Strange Stone'