/* -------------------------------------------------------------------------- */
/*                                 Why Const?                                 */
/* -------------------------------------------------------------------------- */


const X = 'Butter';
// X = 'Swippre';  //  ERROR -- Assignment to constant variable.

/* -------------------------------------------------------------------------- */

/* Const != immutable..
It’s very important to understand const. It doesn’t imply immutability.
A variable is like a pointer to a value (it’s a pointer for objects, it’s an assigned value for primitives). const prevents the variable to be assigned to another value. We could say it makes the pointer immutable, but it doesn’t make the value immutable too! */

const obj = {
  a: 123
};

obj.b = "hello";
obj.a = 423;
delete obj.a;
console.log(obj); // { b: 'hello' }

const f = function() {};



/* -------------------------------------------------------------------------- */



const mediaTypes = { AUDIO: 0, VIDEO: 1, PNG: 2, JPEG: 3, WEBP: 4 };
const errorTypes = { NOTPAID: 0, NOTAVAILABLE: 1, PAINTBALL: 2 };

let myObj = {
  doSomething: function() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        log("Error Code ", errorTypes.NOTPAID);
        break;
      case 1:
        log("Error Code ", errorTypes.NOTAVAILABLE);
        break;
      case 2:
        log("Error Code ", errorTypes.PAINTBALL);
        break;
    }
  },
  saveMedia: function(type, data) {
    switch (type) {
      case 0:
        log("saving an audio file");
        break;
      case 1:
        log("saving a video file");
        break;
      case 2:
      case 3:
      case 4:
        log("saving an image");
        break;
    }
  }
};

// myObj.doSomething();   // BAD Practice !

myObj.saveMedia(0, "audio.mp3");  // GOOD  
myObj.saveMedia(mediaTypes.AUDIO, "audio.mp3");   // GOOD  
myObj.saveMedia(mediaTypes.JPEG, "img.jpg");   // GOOD  