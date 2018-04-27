// $(document).ready(function() {
//     (function() {
//         //settings
//         var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
//         var topbarME = function() { $('#uberbar').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#uberbar').fadeTo(fadeSpeed,fadeTo); };
//         var inside = false;
//         //do
//         $(window).scroll(function() {
//             position = $(window).scrollTop();
//             if(position > topDistance && !inside) {
//                 //add events
//                 topbarML();
//                 $('#uberbar').bind('mouseenter',topbarME);
//                 $('#uberbar').bind('mouseleave',topbarML);
//                 inside = true;
//             }
//             else if (position < topDistance){
//                 topbarME();
//                 $('#uberbar').unbind('mouseenter',topbarME);
//                 $('#uberbar').unbind('mouseleave',topbarML);
//                 inside = false;
//             }
//         });
//     })();
// });



function fadein() {
    $(.overlay).fadeIn("slow");
}

fadein();

// var header = $(".header");
var header = $('header');
$(window).scroll(function() {
    header.addClass('lower-opacity');
    if($(this).scrollTop() < 40) {
        header.removeClass('lower-opacity');
    }
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
       Check the location of each desired element 
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});