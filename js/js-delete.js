$('.jsdelete').on('click', function(e){
    e.preventDefault();
    console.log("delete");
    deleteProduct($(this));
	$('.checkoutwrapper').hide(500);
	$('.delete-txt').show(300);
});

var deleteProduct = (function(obj) {
	console.log(obj);
	obj.hide().closest('.product-container').animate({
	    opacity: 0.4,
	    left: "-=550"
	  }, 500).slideUp();
});

$('.jsmove').on('click', function(e){
    e.preventDefault();
    moveProduct($(this));
});

var moveProduct = (function(obj) {
	obj.closest('.product-container').animate({
	    opacity: 0.4,
	    left: "+=550"
	  }, 500).slideUp();
});
