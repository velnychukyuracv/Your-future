/**
 * Created by Admin on 15.12.2017.
 */

// Scroll Events
$(window).scroll(function(){
    if($(window).scrollTop() ) {
        $('#header').css({ position:'fixed'});
    } else{
        $('#header').css({ position:'relative'});
    }
});