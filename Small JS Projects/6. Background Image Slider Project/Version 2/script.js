    
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    currentImage = 0;

    // Clear All Images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';   
        }
    }

    // initialize Slider
    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';
    }

    // show Previous slider
    function slidLeft() {
        reset();
        sliderImages[currentImage - 1].style.display = 'block';
        currentImage--;
    }

    // show Next slider
    function slidRight() {
        reset();
        sliderImages[currentImage + 1].style.display = 'block';
        currentImage++;
    }

    // left arrow click
    arrowLeft.addEventListener('click', () => {
        if (currentImage === 0) {
            currentImage = sliderImages.length;
        }
        slidLeft();
    });

    // right arrow click
    arrowRight.addEventListener('click', () => {
        if (currentImage === sliderImages.length - 1) {
            currentImage = -1;
        }
        slidRight();
    });

    startSlide();