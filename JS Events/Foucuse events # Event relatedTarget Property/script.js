/* -------------------------------------------------------------------------- */
/*                        Event relatedTarget Property                        */
/* -------------------------------------------------------------------------- */

/*
When your user tabs to a link or clicks on some other element that can hold focus we have several event types that we can work with: focusin, focusout, focus, and blur.
! But difference is _How they handle Bubbling_
* focusout === blur --- Bubble out!
* focusin === focus --- don't Bubble out!


! When moving between different elements that can hold focus we will have access to a property called __relatedTarget__. This property will know where we are headed or where we just came from.
The relatedTarget property returns the element related to the element that triggered the mouse event.
! The relatedTargert property can be used with the mouseover event to indicate the element the cursor just exited, or with the mouseout event to indicate the element the cursor just entered.
The relatedTarget property also works with mouseenter, mouseleave, mouseover, mouseout, dragenter, and dragexit. 


*/

/* -------------------------------------------------------------------------- */

document.querySelector('.in-out input').addEventListener('focusin', goIn);
document.querySelector('.in-out input').addEventListener('focusout', goOut);
function goIn(ev){
    ev.currentTarget.style.color = 'gold';
    console.log('focusin input left');
    if(ev.relatedTarget){
        ev.relatedTarget.style.color = 'red';
        console.log('Just left relatedTarget', ev.relatedTarget.id);
    }
}
function goOut(ev){
    ev.currentTarget.style.color = 'black';
    console.log('focusout input left');
    if(ev.relatedTarget){
        console.log('Headed to relatedTarget', ev.relatedTarget.id);
    }
}

document.querySelector('.focus-blur input').addEventListener('focus', doFocus);
document.querySelector('.focus-blur input').addEventListener('blur', doBlur);
function doFocus(ev){
    ev.currentTarget.style.color = 'gold';
    console.log('focus input right');
    if(ev.relatedTarget){
        ev.relatedTarget.style.color = 'red';
        console.log('Just left relatedTarget', ev.relatedTarget.id);
    }
}
function doBlur(ev){
    ev.currentTarget.style.color = 'black';
    console.log('blur input right');
    if(ev.relatedTarget){
        console.log('Headed to relatedTarget', ev.relatedTarget.id);
    }
}