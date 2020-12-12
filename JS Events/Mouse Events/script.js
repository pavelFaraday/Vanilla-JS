/* -------------------------------------------------------------------------- */
/*                                Mouse Events                                */
/* -------------------------------------------------------------------------- */

/* 

Mouse Events - (MouseOver/MouseOut, MouseEnter/MouseLeave) it's look like they do same thing,
! But difference is _How they handle Bubbling_
* MouseOver - When you move mouse over the object/გადატარება
* MouseOut - When you remove mouse from the object/მოცილება

* MouseEnter - When you move mouse over the object/გადატარება
* MouseLeave - When you remove mouse from the object/მოცილება

------------------------------------------------------------------

* The _Element.classList_ is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
* Using _classList_ is a convenient alternative to accessing an element's list of classes as a space-delimited string via _element.className_.
* A DOMTokenList representing the contents of the element's class attribute. If the class attribute is not set or empty, it returns an empty DOMTokenList, i.e. a DOMTokenList with the length property equal to 0.

! The DOMTokenList itself is read-only, although you can modify it using the add() and remove() methods.
* div.classList.remove("foo");
* div.classList.add("anotherclass");
*/

document.querySelector('.enter p').addEventListener('mouseenter', entering);
document.querySelector('.enter p').addEventListener('mouseleave', leaving);
function entering(ev){
    ev.currentTarget.style.borderColor = 'gold';
    console.log('mouseenter p');
}
function leaving(ev){
    ev.currentTarget.style.borderColor = 'black';
    console.log('mouseleave p');
}
document.querySelector('.over p').addEventListener('mouseover', overing);
document.querySelector('.over p').addEventListener('mouseout', outing);
function overing(ev){
    ev.currentTarget.style.borderColor = 'gold';
    console.log('mouseover p');
}
function outing(ev){
    ev.currentTarget.style.borderColor = 'black';
    console.log('mouseout p');
}

//NO Differences so far...

document.querySelector('.enter').addEventListener('mouseenter', function(ev){
    ev.currentTarget.classList.add('blue');
    console.log('mouseenter div. Add blue.');
});
document.querySelector('.enter').addEventListener('mouseleave', function(ev){
    ev.currentTarget.classList.remove('blue');
    console.log('mouseleave div. Remove blue.');
});

document.querySelector('.over').addEventListener('mouseout', function(ev){
    ev.currentTarget.classList.remove('blue');
    console.log('mouseout div. Remove blue.');
});
document.querySelector('.over').addEventListener('mouseover', function(ev){
    ev.currentTarget.classList.add('blue');
    console.log('mouseover div. Add blue.');
    //, ev.currentTarget.tagName, ev.target.tagName
});
