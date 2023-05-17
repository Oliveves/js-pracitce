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

// $(document).ready(function() {
//     const slideImgs = $(".slideList .slideImg");
//     let currentIndex = 0;
  
//     function fadeSlide() {
//       slideImgs.eq(currentIndex).fadeOut(500, function() {
//         currentIndex = (currentIndex + 1) % slideImgs.length;
//         slideImgs.eq(currentIndex).fadeIn(500);
//       });
//     }
  
//     fadeSlide();
  
//     setInterval(fadeSlide, 3000);
//   });
  