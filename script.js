var slideIndex = 1;
next();



function next(){

    var slides = document.getElementsByClassName("slide");

    if(slideIndex > slides.length - 1){
        slideIndex = 0;
    }
    else{
    slideIndex ++;
    }

    for (i = 0; i< slides.length; i++){
        slides[i].style.display = "none";
    }

    console.log(slides);

    slides[slideIndex -1].style.display = "block";
    
}