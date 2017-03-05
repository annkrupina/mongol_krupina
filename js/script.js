$(document).ready(function(){ 
    $(".owl-carousel").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
});

	
   */ $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        navText: ["<img src='img/gallery-arrow.png'>","<img src='img/gallery-arrow2.png'>"],
    });*/


    $(function() {
  $('select').selectric();
});
    
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })
})

});