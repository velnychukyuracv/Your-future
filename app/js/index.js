'use strict';

//Smooth scroll



//slick slider
//slick top slider
$('.sl-main').slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true
    }
);
//slick bottom slider
$('.sl').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed:3000,
       dots:true
});


//Zoom-gallery pop up
$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
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

//slick bottom slider
$('.sl_thanksgiving').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed:3000,
    dots:true
});