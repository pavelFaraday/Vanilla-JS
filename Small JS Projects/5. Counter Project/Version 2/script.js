
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let counterValue = 0;

function changeColor() {
    if (counterValue < 0) {
        counter.style.color = 'red';
    } else if (counterValue > 0){
        counter.style.color = 'green';
    } else {
        counter.style.color = '#333';
    }
}

incrementBtn.addEventListener('click', () => { 
    counterValue++;
    counter.innerHTML = counterValue;
    changeColor();
});
decrementBtn.addEventListener('click', () => { 
    counterValue--;
    counter.innerHTML = counterValue;
    changeColor();
});
resetBtn.addEventListener('click', () => { 
    counterValue = 0;
    counter.innerHTML = counterValue;
    changeColor();
});

counter.textContent = counterValue;




