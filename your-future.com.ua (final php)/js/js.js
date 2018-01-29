
$('.count').click(function() {
    event.preventDefault();
    $('.count').removeClass('curent');
    $(this).addClass('curent');
    var left = $(this).data('left');
    var modif = '('+ left + '%' +')';
    $('.active').css('transform', 'translateX' + modif);
    var count = $(this).data('count');
    $("input[name='final_price']").val(count);
    $('.price').text(count + ' грн.');
})

// Inline popups
$('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Image popups
$('#image-popups').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Hinge effect popup
$('a.hinge').magnificPopup({
    mainClass: 'mfp-with-fade',
    removalDelay: 1000, //delay removal by X to allow out-animation
    callbacks: {
        beforeClose: function() {
            this.content.addClass('hinge');
        },
        close: function() {
            this.content.removeClass('hinge');
        }
    },
    midClick: true
});
//mobile menu
$(document).ready(function() {
    $("#b-container").click(function() {
        $("#navigation_out_menu").toggleClass("open");
        $("header").toggleClass("open");
        $("#mainContainer").toggleClass("open");
        $("footer").toggleClass("open");
        $(this).toggleClass("open");
    });

});

//slick slider
//slick slider at top header index,thanksgiving,reviews and photo-reporting (pop up)
$('.sl-main').slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
    }
);

//slick slider at header bottom index
$('.sl').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed:2000,
        dots:true
});


//slick  slider at photo-reporting-album
$('.sl-reporting').slick({
        autoplay: true,
        autoplaySpeed:3000,
        asNavFor: '.sl-reporting-2',

    }
);
$('.sl-reporting-2').slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
        speed:1000,
        cssEase:'ease-in',
        centerMode:true,
        arrows:false,
        pauseOnDotsHover:true,
        slidesToShow:5,
        asNavFor: '.sl-reporting',
        focusOnSelect: true
    }
);


//slick  slider in video-reporting
$('.sl-reporting-video').slick({
    dots:true,
    touchMove:true
    });



//Zoom-gallery pop up at index
$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });
});


$(document).ready(function() {

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

});






// Scroll Events
$(window).scroll(function(){
    if($(window).scrollTop() ) {
        $('#header').css({ position:'fixed'});
    } else{
        $('#header').css({ position:'relative'});
    }
});


$('.middleBottomFooter').click(function(){
    $('html, body').animate({scrollTop:$('#mainContainer').position().top}, 1500);
});

