
$(window).scroll(function ()
    {
        if($(this).scrollTop()>700) $(".top-menu").css("background-color", "white");
        else $(".top-menu").css('background-color', "rgba( 255, 255, 255, 0.6")
    }
);

$(document).ready(function(){
    $('.top-menu__hamb-icon').click(function(){
        var nav = document.getElementById("changeHamb");
        $(this).toggleClass('open');
        console.log(document.getElementsByClassName("top-menu__main-menu"));
        nav.classList.toggle("top-menu__main-menu2");
        nav.classList.toggle("top-menu__main-menu");
    });

    $(".top-menu__link").click(function() {
        var id = $(this).attr('id');
        $('html, body').animate({
            scrollTop: $("#go"+id).offset().top
        }, 2000);
    });

});

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal__my-slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

}



