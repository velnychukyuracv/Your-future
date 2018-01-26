

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

