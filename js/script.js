$(document).ready(function(){

    $('.gallery-items').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 4,
       arrows: true,
       prevArrow: $('.gallery-prev'),
       nextArrow: $('.gallery-next'),
     });
 

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