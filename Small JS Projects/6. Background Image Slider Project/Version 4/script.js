var slides = document.getElementsByClassName("my_slides");
var index = 0;

show_slide(index);

function show_slide(i){
  //increment/decrement slide index
  index += i;

  // hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // if index is greater than the amount of slides (set it to zero)
  if (index > slides.length - 1) {
    index = 0 ;
  } // if index is less than zero (set it to the length of slides)
  else if (index < 0) {
      index = slides.length - 1;
  }

  // only display the image that's next or previous
  slides[index].style.display = "block";
}

