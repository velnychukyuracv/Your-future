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



