
$(document).ready(function () {
    $('.overlay').fadeIn(1000).removeClass('hidden');
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
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

//scroll to anchor point when clicking anchor tag
$("a[href^=#]").click(function(e) { 
  e.preventDefault(); 
  var dest = $(this).attr('href'); 
  console.log(dest); 
  $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow'); 
});