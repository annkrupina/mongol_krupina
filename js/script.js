$(document).ready(function(){ 
	//$(".item-1").prev().hide();
	$("li").on("click",function(){
		console.log($(this).text());
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
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
});