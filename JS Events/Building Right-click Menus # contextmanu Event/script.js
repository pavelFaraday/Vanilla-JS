/* -------------------------------------------------------------------------- */
/*               Building Right-click Menus # contextmanu Event               */
/* -------------------------------------------------------------------------- */

/* 
     Get Tutorial with this Link:  
   * https://www.youtube.com/watch?v=7Iadn0Rm2T8&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp&index=12
*/

let menu = null;
document.addEventListener('DOMContentLoaded', function(){
    //make sure the right click menu is hidden
    menu = document.querySelector('.menu');
    menu.classList.add('off');
    
    //add the right click listener to the box
    
    let box = document.getElementById('box');
    box.addEventListener('contextmenu', showmenu);  // ! contextmanu Event
    
    //add a listener for leaving the menu and hiding it
    menu.addEventListener('mouseleave', hidemenu);
    
    //add the listeners for the menu items
    addMenuListeners();
});

function addMenuListeners(){
    document.getElementById('red').addEventListener('click', setColour);
    document.getElementById('gold').addEventListener('click', setColour);
    document.getElementById('green').addEventListener('click', setColour);
}

function setColour(ev){
    hidemenu();
    let clr = ev.target.id;
    document.getElementById('box').style.backgroundColor = clr;
}

function showmenu(ev){
    //stop the real right click menu
    ev.preventDefault(); 
    //show the custom menu
    console.log( ev.clientX, ev.clientY );
    menu.style.top = `${ev.clientY - 20}px`;
    menu.style.left = `${ev.clientX - 20}px`;
    menu.classList.remove('off');
}

function hidemenu(ev){
    menu.classList.add('off');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}
