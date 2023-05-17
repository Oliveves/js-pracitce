$(document).ready(function(){
    var x = 0;
    setInterval (function (){
        if(x<2){
            x++;
        } else {
            x = 0;
        }

        var sp = x * (-300)+"px";
        $(".slideList").animate({left:sp}, 400);
        console.log(x);}, 3000);
});