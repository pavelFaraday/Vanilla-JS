/* -------------------------------------------------------------------------- */
/*                         Modifying Text As You Type                         */
/* -------------------------------------------------------------------------- */

/* 
If you want to do conversion of text that is in an input field, as the person is typing, then you need to understand the differences between the events - keydown, keyup, keypress, and input.
This code explains those differences and shows how to do the automatic conversion of a text field to uppercase. 

*/

document.addEventListener('DOMContentLoaded', function(){
    let txt = document.getElementById('txt');
    //txt.addEventListener('keydown', upThing);   
    //1st - no charcode. no input value added yet
    
    txt.addEventListener('keypress', upThing);  
    //2nd - charcode. no input value added yet
    
    txt.addEventListener('keyup', upThing);     
    //3rd - no charcode. input value added
    
    //txt.addEventListener('input', upThing);
    //4th - no charcode but input value accessible/mutable
});

function upThing(ev){
    let num = ev.charCode;
    let letter = String.fromCharCode(num);
    console.log(ev.type, num, letter, ev.target.value);
    ev.target.value = ev.target.value.toUpperCase();
}
