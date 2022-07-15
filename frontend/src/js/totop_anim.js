// TO TOP ANIMATION (JQUERY)

import $ from 'jquery';

$(window).on("scroll", function(){
    if($(window).scrollTop()>300)
    {
        $("#totop").addClass("totop_2");
    }
    else
    {

        $("#totop").removeClass("totop_2");
    }
});