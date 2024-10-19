var slideIndex = 0;
carousel();

function carousel() {
    var i;
    //make all the slides display none
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    //if slideindex > x.length then make it 1
    if (slideIndex > x.length) { slideIndex = 1 }
    //make the slideIndex slides display block
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}