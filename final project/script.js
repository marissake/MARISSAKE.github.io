$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 8s0) {
         $('body').addClass('changeColor')
      }
      if ($(this).scrollTop() < 50) {
         $('body').removeClass('changeColor')
      }
   });
});