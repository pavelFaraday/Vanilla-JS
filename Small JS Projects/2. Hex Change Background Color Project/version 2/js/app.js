
    /*
    The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
    */

    var button = document.querySelector('#btn');
    var body = document.querySelector('body');
    var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var value = document.querySelector('#hex-value');

    button.addEventListener('click', changeHex);

    function changeHex(){
        var hex = '#';
        for (var i = 0; i < 6; i++){
            var index = Math.floor(Math.random()*hexValues.length);
            hex += hexValues[index];
        }

        // The textContent property sets or returns the text content of the specified node, and all its descendants.
        
        value.textContent = hex;
        body.style.backgroundColor = hex;
    }