$(document).ready(function(){
    $(".slideList").children("div:gt(0)").hide();

    var x = 0;
    setInterval(function(){
        var next = (x+1) % 3;
        $(".slideList").find("div").eq(x).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        x=next; 
    }, 3000);

});