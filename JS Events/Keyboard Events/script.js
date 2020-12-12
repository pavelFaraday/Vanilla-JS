/* -------------------------------------------------------------------------- */
/*                       Keyboard Events in the Browser                       */
/* -------------------------------------------------------------------------- */
/* 

* target.tagName --- only name of current tag ('input') with Caps-Lock

* ev.char || ev.charCode || ev.which --- unicode value of the character that has been typed/pressed
Depending on which browser u are and when u are running this, there are few different properties/possibilities that could give u the Unicode character for whatever was pressed on the kaybord.

* String.fromCharCode(char); --- Convert unicode value into string, 75 -> K...
https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
https://www.w3schools.com/charsets/ref_html_ascii.asp

Keybord Events (very similar to Mouse events):
* keydown - when u are pressing key
* keyup - when u release key
* keypress - when u done both (keydown + keyup)

*/

/* -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', bindKey);

function bindKey(){
    let txt = document.getElementById('txt');
    txt.addEventListener('keydown', anyKey);
    document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev){
    //// console.log( ev.type, ev.target, ev.currentTarget);
    //// let target = ev.currentTarget;                  // ! <input type="text" id="txt">
    //// let tag = target.tagName;                       // ! only name of current tag ('input') with Caps-Lock
    //// console.log(char, tag);                         // 75 "INPUT"

    let char = ev.char || ev.charCode || ev.which;    // unicode value of the character that has been typed/pressed
    //// let s = String.fromCharCode(char);           // ! convert unicode value into string
    //// console.log(s);                              // 75 (convert)-> K
    switch(char){
        case 37:
            console.log('LEFT');
            break;
        case 40:
            console.log('DOWN');
            break;
        case 75:
            console.log('K');
            break;
        case 27:
            console.log('ESC');
            break;
    }
}
