/* -------------------------------------------------------------------------- */
/*                       Event Bubbling and Propagation                       */
/* -------------------------------------------------------------------------- */
/* 
 https://javascript.info/bubbling-and-capturing
 Also see Example picture -- 'Event Bubbling.png'

The bubbling principle is simple:
* When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. 

Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

A click on the inner <p> first runs onclick:
On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.

! So if we click on <p>, then we’ll see 3 alerts: p → div → form.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water

--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

-- For STOPPING Bubbling add into the function of event:
* ev.stopPropagation();  

-- See good example at: https://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_currenttarget
* ev.currentTarget; 

-- How add CSS class to element:
* target.className = 'gold'; 

-- How remove CSS class from element:
* element.className = ''; 

-- All events after this function will stop:
* ev.stopImmediatePropagation(); 

*/

let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');
let log = console.log;

let highlight = (ev) => {
    ev.stopPropagation(); // ! STOP Bubbling
    let target = ev.currentTarget; // See the link above ^
    target.className = 'gold';  // * How add CSS class to element !
    reset(target);
};

let variables = [m,d,p,s]; // ! <--- bubbling because of this

variables.forEach((element)=>{
    element.addEventListener('click', highlight);
});

let reset = (_element)=>{
    setTimeout(() => {
        _element.className = '';  // * How remove CSS class from element !
    }, 2000);
};


/* -------------------------------------------------------------------------- */
 
d.addEventListener('click', (ev)=>{
    ev.stopImmediatePropagation();  // ! all events after this will stop
    log('Hi I\'m a DIV');
}); 


