$(document).ready(function(){

    $(".subir").click(function(){
       $("body, html").animate({
            scrollTop: "0px"
       }, 700);
    });

   $(window).scroll(function () {
        if($(this).scrollTop() > 300) {
            $('.subir').slideDown(400);
        }else{
            $('.subir').slideUp(400);
        }
    });
});