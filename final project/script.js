

//on page load, add animation to title overlay

$(window).scroll(function () {
    var offset = $(window).scrollTop();
    console.log(offset);
    if (offset > 1) {
            $('.overlay').css('display', 'block')

      $('.overlay').addClass('animated slideInUp')
    } 
    //   $('.overlay').removeClass('animated lightSpeedOut')
    // }
  })




//on scroll, fade in all elements with class fade
$(window).on("load",function() {  //.on attaches event handlers
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight(); //scrolltop is vertical position of scrollbar and innerheight is height of element
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight(); //outerheight includes padding, border, &margin
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}  //fadeto animates the opacity of an element, (speed, opacity)
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

//scroll to anchor point when clicking anchor tag
$("a[href^=#]").click(function(e) {  //onclick of anchor tag 
  e.preventDefault(); //don't link out
  var dest = $(this).attr('href'); //.attr finds location of element on page
  console.log(dest); 
  $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow'); //.offset returns coordinates top and left
});

//lightbox

$(document).ready(function(){
    $('.chocolat-parent').Chocolat(); //chocolate box required code
});


//hamburger menu 

$(".hamburger").click(showMenu);
function showMenu() {
  $(".mobilemenu").toggle();  //show hamburgermenu on click
}

