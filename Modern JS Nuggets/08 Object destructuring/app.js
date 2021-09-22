// faster/easier way to access/unpack values from arrays

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName,lastName,sister);

/* -------------------------- Object destructuring - Simple Example -------------------------- */
//  Property names must match !
// const { first, last, city } = bob;
// console.log(first, last, city); // bob sanders chicago

/* -------------------------------------------------------------------------- */

const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(firstName, last, city, zip, favoriteSibling);

 


function printPerson(person) {
  const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(bob);

/* ----------------------------- or -> another way ----------------------------- */

function printPerson({last,city,siblings:{sister}}) {
  console.log(last, city, sister);
}

printPerson(bob);
