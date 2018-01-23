

// Scroll Events
$(window).scroll(function(){
    if($(window).scrollTop() ) {
        $('#header').css({ position:'fixed'});
    } else{
        $('#header').css({ position:'relative'});
    }
});


