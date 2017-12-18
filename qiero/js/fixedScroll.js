var fixedScroll = (function(objClass) {
	getVariables(objClass);

	$w.scroll(function(){
 // console.log("touch"); 
	   var wScroll = $w.scrollTop();
	   if (wScroll + wHeight - objHeight < objOffset) {
	   	$obj.addClass("static");
	   }
	   else {
	   	$(objClass).removeClass("static");
	   }
		
	  
	});

	$(document).on('touchmove', function(event) {
	  
	});

	$(window).resize(function() {
		getVariables(objClass);
		console.log("resize");
	});

});

var getVariables = (function(objClass) {
	$w = $(window);
	$obj = $(objClass);
	objOffset = $(objClass).offset().top;
	wHeight = $w.height();
	objHeight = $obj.outerHeight();
});