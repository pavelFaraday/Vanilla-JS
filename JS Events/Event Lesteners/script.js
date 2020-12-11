/* -------------------------------------------------------------------------- */
/*                        JavaScript Event Listeners                        */
/* -------------------------------------------------------------------------- */

/* 
Javascript is described as Event-driven programming: your program waits for events and uses them as triggers to run the next function(s).

! Basic Syntax:
* Object.addEventListener('event', function);

 -- Object -- is often variable that stores/saves HTML element (tag, div, class, id, input, button..)
 -- addEventListener -- defines for browser an event
 -- event -- click, blur, change, input, load, focus, Mouse_down, Mouse_up..
 -- function -- function, that will execute by event.. 
                (name of a function, Arrow function, Anonimous function)
                Just put name of the function! Don't add parentheses into the and of it !

! Examples:
    myDiv.addEventListener('click',  function(a){
        console.log(a+2);
    });

    myDiv.addEventListener('click', doSomething);
    function doSomething(a) {
        console.log(a+2);
    }

    myDiv.addEventListener('click', (a) => {
        console.log(a+2);
    });

Named function You can reuse into another events !
Arrow function, Anonimous function you CAN'T REUSE into another events !
*/

/* -------------------------------------------------------------------------- */
// add EventListener to the DOM
// DOMContentLoaded means: First Browser must finish reading through all the HTML document. So, after this moment, it will read JS document and function 'imFunction'.

document.addEventListener('DOMContentLoaded', imFunction);

function imFunction(){
    let btn = document.getElementById('btn');
    let lnk = document.getElementById('lnk');
    let txt = document.getElementById('txt');

    btn.addEventListener('click', (ev) =>{
        console.log(ev.type, ev.target, ev.currentTarget);
    });

    lnk.addEventListener('click', linkClick);
    function linkClick(ev) {
        ev.preventDefault();  // ! Stop default browser behaviour - stop link from the being followed
        console.log(ev.type, ev.target, ev.currentTarget);
    }

    txt.addEventListener('input', (ev) => {
        console.log(ev.type, ev.target, ev.target.value);
    });

    // change event -- when the person changes something into input and leaves input fild
    txt.addEventListener('change', (ev) => {
        console.log(ev.type, ev.target, ev.target.value);
    });

    // blur event -- when the person doesn't change nothing and leaves input fild
    txt.addEventListener('blur', (ev) => {
        console.log(ev.type, ev.target, ev.target.value);
    });
}







