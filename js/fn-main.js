
$( document ).ready(function() {
	$('.pue-button').click(function() {
		alert('lightbox');
	});



	$('.quickview').click(function() {
		alert('lightbox');
	});
 	var i = 0;
	$('.pue-content .product-box').each(function() {
		i++
	    $( this ).addClass( "pb" + i );
	});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});


	$('#filter .filter-txt').click(function() {
		$(this).parent().toggleClass('active');
	});


});
