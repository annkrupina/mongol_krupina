$(document).ready(function(){ 
	//$(".item-1").prev().hide();
	$("li").on("click",function(){
		console.log($(this).text());
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
        navText: ["<i class='owl-prev'>","<i class='owl-next'>"],
		navText: ["<img src='img/gallery-arrow.png'>","<img src='img/gallery-arrow2.png'>"],
        responsive : {
    
    0 : {
        items:1,
    },
    320: {
    	items:2
    },

    480 : {
        items:3
    },
    // breakpoint from 768 up
    768 : {
        items:4
    }
}
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