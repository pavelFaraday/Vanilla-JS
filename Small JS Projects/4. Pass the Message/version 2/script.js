// The onload event occurs when an object has been loaded. onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).

/* 
Does document onload and window onload fire at the same time?
onload. The general idea is that window.onload fires when the document's window is ready for presentation and document.onload fires when the DOM tree (built from the markup code within the document) is completed.
*/

// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

/*
The textContent property sets or returns the text content of the specified node, and all its descendants.

If you set the textContent property, any child nodes are removed and replaced by a single Text node containing the specified string.

Note: This property is similar to the innerText property, however there are some differences:
textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements.
innerText will not return the text of elements that are hidden with CSS (textContent will).
*/




window.onload = function(){
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e){
        e.preventDefault(); 
        const message = document.querySelector('.message');
        const feedback = document.querySelector('.show');
        const messageContent = document.querySelector('.input_text');

        if (message.value === '') {
            feedback.textContent = 'Please, Enter a message!';
            feedback.style.color = 'red';
            setTimeout(function(){
                feedback.textContent = 'Last Message Delivered!';
                feedback.style.color = 'blue';
            },3000);
        } else {
            messageContent.textContent = message.value;
            message.value = '';
        }
    });
};