/* -------------------------------------------------------------------------- */
/*                           Handling Global/Local Errors                           */
/* -------------------------------------------------------------------------- */

/*

___The console.warn() method writes a warning to the console.___
* console.warn('something');

___The onerror event is triggered if an error occurs while loading an external file (e.g. a document or an image)___
* onerror() --- Event


*/


// ! Good for External content loading (img, link..) error handling
document.addEventListener('DOMContentLoaded', function(){
    let img = document.getElementById('badImg');
    img.onerror = function(){
        console.warn('image did not load');
    };
});
      

// ! Good Practic for Global Error Handling
window.addEventListener('error', function(ev){
    console.log(ev.type);
    console.warn(ev);
    ev.preventDefault();
});

 
// ! NOT Practical at all..
window.onerror = function(msg, url, line, col, err){
    console.log(msg, url, line, col, err);
};

// ! Good practic for Local error handling..
/* try { function a(){
        referenceA.error.causing();
    }
    
    function b(){
        referenceB.error.causing();
    }
    
    a();
    
} catch(err){
    console.error(err);
} */



// asd // for making error

   