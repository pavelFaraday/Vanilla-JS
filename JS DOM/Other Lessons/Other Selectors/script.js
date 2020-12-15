/* -------------------------------------------------------------------------- */
/*                           grab an element by ID                            */
/* -------------------------------------------------------------------------- */
const title = document.getElementById('page-title');
console.log(title);


/* -------------------------------------------------------------------------- */
/*                           grab elements by their CLASS name                */
/* -------------------------------------------------------------------------- */
const class_names = document.getElementsByClassName('error');
console.log(class_names); // grab all elemets with class name 'error'

console.log(class_names[0]); // grab first element with '.error'
console.log(class_names[1]); // grab second element with '.error'
// forEach method Does Not Works with HTMLCollections - Only works with NODEList !!!


/* -------------------------------------------------------------------------- */
/*                           grab elements by their TAG name                  */
/* -------------------------------------------------------------------------- */
const tag_names = document.getElementsByTagName('p');
console.log(tag_names);

console.log(tag_names[0]);
console.log(tag_names[1]);
console.log(tag_names[2]);