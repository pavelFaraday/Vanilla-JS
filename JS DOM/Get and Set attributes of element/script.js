/* -------------------------------------------------------------------------- */
/*                                get & set Attribute                               */
/* -------------------------------------------------------------------------- */

// 1) get element for identification
const attr_a = document.querySelector('a');

// 2) get attribute ('href') from selected element
console.log(attr_a.getAttribute('href'));

// 3) set/change value of choosed/gotten attribute 
attr_a.setAttribute('href', 'https://getbootstrap.com/');


// 4) change text in a tag (because we changed its pass)
attr_a.innerText = 'Bootstrap';



/* -------------------------------------------------------------------------- */

const p_tag = document.querySelector('.error');

console.log(p_tag.getAttribute('class'));
p_tag.setAttribute('class', 'success');


/* -------------------------------------------------------------------------- */


// It overrides completly all old styles with new style! 
// Doesn't adds extra style!
p_tag.setAttribute('style', 'color:green; font-style: italic;');

// therefor we can do by such way:
// 1) see all style attributes in Console:
console.log(p_tag.style);
// 2) choose one of theme:
console.log(p_tag.style.color);
// 3) change css atribute
p_tag.style.marginLeft = '130px';
p_tag.style.fontSize = '50px';
p_tag.style.fontFamily = 'sans-serif';
p_tag.style.color = '#f98989';


// DELETE style
p_tag.style.marginLeft = '';