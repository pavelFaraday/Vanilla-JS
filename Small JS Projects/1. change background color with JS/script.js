var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

button.addEventListener('click', changeBackground);

function changeBackground(){
var colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor = colors[colorIndex];
}


/* 
// Second Solution:

var color = ['#222f3e', '#0a9735', '#0a3b97', '#970a74', '#d81861'];
var i = 0;

document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
});
*/