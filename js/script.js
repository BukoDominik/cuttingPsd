
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

    $('.gallery__photo').on("click", function(){
        $(".light-box__background").animate({"opacity": ".90"}, 500);
        $(".light-box").animate({"opacity": "1.0"}, 500);
        $(".light-box__background, .light-box").css("display", "block");
        var photo = $(this).attr("src");
        $(".light-box__photo").attr({src: photo});
    });
    $(".light-box__close, .light-box__background").on("click", function(){
        closeBox();
    });
    function closeBox() {
        $(".light-box__background, .light-box").animate({"opacity": "0"}, 500, function(){
            $(".light-box__background, .light-box").css("display", "none");
        })

    }
});





