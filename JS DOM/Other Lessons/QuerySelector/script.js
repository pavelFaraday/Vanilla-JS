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

class_errors.forEach(item => {
    item.style.color = 'red';
    item.style.backgroundColor = 'black';
    item.style.padding = '20px';
    item.style.width = '40%';
});

//-----------------

let ul = document.querySelector('#myList');
let lis = ul.querySelectorAll('li');

lis.forEach(item2 => {
    item2.style.fontSize = '40px';
});

/* -------------------------------------------------------------------------- */

let container2 = document.querySelector('#container2');
let box2 = container2.querySelector('.box');
console.log(box2);
// <p class="box">constainer 2 - box 2</p>

// -------------- or ----------------

let container_2 = document.querySelector('#container2 .box');
console.log(container_2);
// <p class="box">constainer 2 - box 2</p>
/* -------------------------------------------------------------------------- */