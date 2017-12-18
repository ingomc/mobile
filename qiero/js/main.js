window.onload = (function(){

function setContentSize() 
{
    imgheight = $('.swiper-container img').height();
    $('.swiper-container').css('height', imgheight + 'px')
}
    
    setContentSize();
    $(window).resize(function(){
        setContentSize()
    })

    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        autoplay: 3000,
        autoplayDisableOnInteraction: true,
        grabCursor: true,
        paginationClickable: true,
        calculateHeight: true,
        updateOnImagesReady: true
    });
    var mySwiper2 = new Swiper('.home .swiper-container2',{
        slidesPerView:'auto',
        centeredSlides: true,
        loop:true,
        initialSlide:1,
        calculateHeight: true
    });
    var mySwiper3 = new Swiper('.pds .swiper-container2',{
        slidesPerView:'auto',
        calculateHeight: true
    });
    $('.menuarrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    });
    $('.menuarrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    });
    $( ".level1 > li > span" ).click(function() {
        if ($(this).parent().hasClass('selected')) {
            $('.level1 > li').removeClass('selected');            
        }
        else {
            $('.level1 > li').removeClass('selected');
            $(this).parent().addClass('selected');            
        }
    });
    $( ".product-details > li" ).click(function() {
        if ($(this).hasClass('selected')) {
            $('.product-details > li').removeClass('selected');            
        }
        else {
            $('.product-details > li').removeClass('selected');
            $(this).addClass('selected');            
        }
    });
    $("#menubutton").click(function() {
        targetID = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(targetID).offset().top-60
        }, 300);
    });
    $("#icon-suche").click(function() {
        targetID = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(targetID).offset().top-70
        }, 300);
    });


$(function(){
    function setContentSize() {
        $('.swiper-content').css({
            height: $('.swiper-content').width()
        })
    }
    setContentSize()
    $(window).resize(function(){
        setContentSize()
    })

    //Swiper Content
    var contentSwiper = $('.swiper-content').swiper({
        onSlideChangeStart: function(){
            updateNavPosition()
        }
    })
    //Nav
    var navSwiper = $('.swiper-nav').swiper({
        visibilityFullFit: true,
        slidesPerView:'auto',
        //Thumbnails Clicks
        onSlideClick: function(){
            contentSwiper.swipeTo( navSwiper.clickedSlideIndex )
        }
    })

$('.arrow.left').on('click', function(e){
    e.preventDefault();
$('.swiper-content').swiper().swipePrev();
        // alert(contentSwiper.slides.length);
        if (contentSwiper.activeIndex>0){            
    contentSwiper.activeIndex = contentSwiper.activeIndex - 1;
    console.log( contentSwiper.activeIndex);
    updateNavPosition()
        }
});
$('.arrow.right').on('click', function(e){    
    e.preventDefault();
    $('.swiper-content').swiper().swipeNext();
    console.log(contentSwiper.activeIndex + " - " + contentSwiper.slides.length);
     if (contentSwiper.activeIndex < contentSwiper.slides.length-1){
        contentSwiper.activeIndex = contentSwiper.activeIndex + 1;
    console.log(contentSwiper.activeIndex);
        updateNavPosition();
    }
}) ;

    //Update Nav Position
    function updateNavPosition(){
        $('.swiper-nav .active-nav').removeClass('active-nav');
    console.log(contentSwiper.activeIndex);
        var activeNav = $('.swiper-nav .swiper-slide').eq(contentSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index()>navSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(navSwiper.width/activeNav.width())-1
                navSwiper.swipeTo(activeNav.index()-thumbsPerNav)
            }
            else {
                navSwiper.swipeTo(activeNav.index())
            }   
        }
    }
});


$(".jsSubmitForm").click(function() {
    $(this).closest("form").addClass("submitted");
        });

// PUE und SUE Filter Sortieren Toggle

   
    $("body").append('<div class="layer-bg"></div>');



    $(".jssorttoggle").click(
        function() {
            console.log("sort"); 
            if ($("body").hasClass("layer-mode filteractive")) { 
                $("body").removeClass("layer-mode filteractive");
                $("body").toggleClass("layer-mode sortactive");
            } else {
            $("body").toggleClass("layer-mode sortactive");
            }       
        }
    );
    $(".jsfiltertoggle, .jsapply").click(
        function() {
            console.log("filter"); 
            if ($("body").hasClass("layer-mode sortactive")) { 
                $("body").removeClass("layer-mode sortactive");
                $("body").toggleClass("layer-mode filteractive");
            } else {
            $("body").toggleClass("layer-mode filteractive");
            }       
        }
    );
    $(".layer-bg").click( 
        function() {
                $("body").removeClass("layer-mode sortactive filteractive");
            }       
        
    );
    // Filter Toggle

    $(".filterbutton").click( 
        function() {
                $(this).parent().toggleClass("expanded");
            }       
    );
    $(".jssizetoggle").click( 
        function() {
                $(this).toggleClass("active");
            }       
    );
    $(".jscolortoggle").click( 
        function() {
                $(this).toggleClass("active");
            }       
    );    
    $(".deletefilter").click( 
        function() {
                $(this).parent().parent().find(".active").removeClass("active");
                console.log("deletefiter");
            }       
    ); 
    $(".jsreset").click( 
        function() {
                $(this).parent().parent().find(".active").removeClass("active");
                $(this).parent().parent().find(".expanded").removeClass("expanded");
            }       
    );

    // Sortieren

    $(".sort .menuarrow").click( 
        function() {
                $(this).parent().find(".selected").removeClass("selected");
                $(this).addClass("selected");
            }       
    );

// Preisslider PÜ und SÜ
    $("#jspriceslider").noUiSlider({
         range: [0, 100]
        ,start: [20, 80]
        ,connect: true,
        serialization: {
             to: [ $('.minprice'), $('.maxprice') ]
            ,resolution: 1
        }
    });

// Warenkorb schritt1 Login toggle

    $(".loginbutton").click( 
        function() {
                //$(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().toggleClass("expanded");
            }       
    );
// Wechsel zu Anemldung mit Kundennummer
    $(".jsbuttonknr").click( 
        function(event) {
            event.preventDefault();
                //$(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().removeClass("expanded");
                $(this).parent().parent().find(".numberlogin").addClass("expanded");
                }       
    );
// Wechsel zu Anemldung mit email
    $(".jsbuttonemail").click( 
        function(event) {
            event.preventDefault();
                //$(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().removeClass("expanded");
                $(this).parent().parent().find(".memberlogin").addClass("expanded");
               }       
    );
    $(".adressbutton").click( 
        function() {
                //$(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().toggleClass("expanded");
            }       
    );

// W2 Zahlungsarten wechsel
    $(".jspaymenttoggle").click( 
        function() {
                //$(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().parent().find(".expanded").removeClass("expanded");
                $(this).parent().addClass("expanded");
            }       
    );

});