// FLOATING CONTACT POP-UP ANIMATION (JQUERY)

import $ from 'jquery';

$(window).on("scroll", function(){
    if($(window).scrollTop()>600)
    {
        $("#float_contact").addClass("float_con");
    }
    else
    {

        $("#float_contact").removeClass("float_con");
    }
});