/* -------------------------------------------------------------------------- */
/*                   innerText - Change only text in HTML element             */
/* -------------------------------------------------------------------------- */


// Change Text only single element
const first_para = document.querySelector('p'); // 1) get first p tag

console.log(first_para.innerText); // changes text only in console. NOT in HTML!
first_para.innerText = 'I changed Text |'; // changes text in HTML.
first_para.innerText += ' I appended Text'; // appende/add text to original text.


/* -------------------------------------------------------------------------- */


// Change Text in all elements
const all_h3 = document.querySelectorAll('h3');

all_h3.forEach(h3 => {
    h3.innerText = 'You changed all H3 tag texts';
});



/* -------------------------------------------------------------------------- */
/*                   innerHTML - Change HTML in HTML element                  */
/* -------------------------------------------------------------------------- */

const content = document.querySelector('.content');

console.log(content.innerHTML); // <p>This is a content</p>
content.innerHTML = '<h5>I replaced p tag with h5 tag</h5>';
content.innerHTML += '<p style="color:red;"><b><i>I appended p tag to h5 tag</i></b></p>';





/* -------------------------------------------------------------------------- */
/*                 How output data in html from Database array                */
/* -------------------------------------------------------------------------- */

// Data from DB as array
const people = ['Sou', 'Mario', 'Bravo', 'Luigi', 'Vika'];

people.forEach(person => {
    content.innerHTML += `<ul>
                            <li style="color:blue;">
                                ${person}
                            </li>
                          </ul>`;
});