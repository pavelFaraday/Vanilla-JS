/* -------------------------------------------------------------------------- */
/*                        How add & remove class/style                        */
/* -------------------------------------------------------------------------- */

// The classList property returns the class name(s) of an element, as a DOMTokenList object.
// This property is useful to add, remove and toggle CSS classes on an element.
// classList.add(class1, class2, ...) - Adds one or more class names to an element.
// classList.remove(class1, class2, ...)
// The classList property is read-only, however, you can modify it by using the add() and remove() methods.

const content = document.querySelector('p');

console.log(content.classList);
// remove original class
content.classList.remove('error');
// add new class
content.classList.add('success');


/* -------------------------------------------------------------------------- */
/*                                  Challenge                                 */
/* -------------------------------------------------------------------------- */

const h3_all = document.querySelectorAll('h3');

h3_all.forEach(h3 => {
    if (h3.textContent.includes('success')) {
        h3.classList.add('success');
    } else if (h3.textContent.includes('error')) {
        h3.classList.add('error');
    } else {
        h3.style = '';
    }
});

/* -------------------------------------------------------------------------- */
let button = document.querySelector('button');

button.addEventListener('click', () => {
    document.getElementById("myDIV").classList.toggle("newClassName");
});