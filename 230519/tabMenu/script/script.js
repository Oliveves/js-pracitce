$(window).on("load", function(){
    $("h1").on("click", function(){
        $(this).addClass("on")
        .siblings("h1").removeClass("on")
    });
});