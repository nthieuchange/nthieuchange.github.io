$(document).ready(function() {
    // SearchBox Animation
   $('#search-query').focus(function() {
       $(this).animate({width: '100%'}, 350);
   }).blur(function() {
       $(this).stop().animate({width: '60%'}, 350);
   });

   // Load footer
   $(".add-footer").load("https://nthieuchange.github.io/html/footer.html");

   // Responsive Category & Location
   ToggleLeftSide();
   $(window).bind('resize', ToggleLeftSide);
});

function ToggleLeftSide(){
	var deviceWidth = $(window).width()//$('[data-role="page"]').first().width();
    if (deviceWidth <= 991){
    	$(".panel-title").attr("data-toggle","collapse");
    	$("#category").removeClass("in");
    	$("#location-list").removeClass("in");

    }else{
    	$(".panel-title").removeAttr("data-toggle");
        $("#category").css({"height":""});
        $("#location-list").css({"height":""});
    	$("#category").addClass("in");
    	$("#location-list").addClass("in");
    }
}
