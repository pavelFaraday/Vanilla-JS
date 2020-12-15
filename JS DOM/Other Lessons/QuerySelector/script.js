/* -------------------------------------------------------------------------- */
/*                    querySelector - grab single selector                    */
/* -------------------------------------------------------------------------- */

// document.querySelector('p') - grabs first p tag and ignores others!
const para = document.querySelector('p');
console.log(para);

// document.querySelector('.error') - grabs first tag with CLASS selector named 'error'.
const para_with_class = document.querySelector('.error');
console.log(para_with_class);

// document.querySelector('div.error') - grabs div tag with CLASS selector named 'error'.
const div_with_class = document.querySelector('div.error');
console.log(div_with_class);



/* -------------------------------------------------------------------------- */
/*                    querySelectorAll - grab multiple selectors              */
/* -------------------------------------------------------------------------- */

// document.querySelectorAll('p') - grabs all p tags.
const paras = document.querySelectorAll('p');
console.log(paras); // shows all - three p tags

paras.forEach(para => {
    console.log(para);
}); // shows all - three p tags

console.log(paras[0]); // shows first p tag
console.log(paras[1]); // shows second p tag
console.log(paras[2]); // shows third p tag

/* -------------------------------------------------------------------------- */


const class_errors = document.querySelectorAll('.error');
console.log(class_errors);