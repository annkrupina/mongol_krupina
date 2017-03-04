$(document).ready(function(){ 
	//$(".item-1").prev().hide();
	$("li").on("click",function(){
		console.log($(this).text());
	});		
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        navText: ["<img src='img/gallery-arrow.png'>","<img src='img/gallery-arrow2.png'>"],
    });

    $(function() {
  $('select').selectric();
});
    (function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})
});