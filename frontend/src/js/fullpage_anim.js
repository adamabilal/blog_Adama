// FULL PAGE ANIMATION (JQUERY)

import $ from 'jquery';

$(document).ready(function()
	{
		$(window).scroll(function(){
			var positiontop=$(document).scrollTop();
			// console.log(positiontop);

			if ((positiontop>325)&&(positiontop<400))
			{	
				$("#bio").addClass("cutout_anim");
			}

			if ((positiontop>20)&&(positiontop<50))
			{	
				$("#counter_img_div").addClass("counter_img_animation");
			}

			if ((positiontop>25)&&(positiontop<50))
			{	
				$("#counter1").addClass("counter1_anim");
				$("#counter2").addClass("counter2_anim");
				$("#counter3").addClass("counter3_anim");
				$("#counter4").addClass("counter4_anim");
			}

			if((positiontop>380)&&(positiontop<480))
			{
				$("#biotext_1").addClass("biotext1_anim");
				$("#biotext_2").addClass("biotext2_anim");
			}

			if((positiontop>1650)&&(positiontop<1800))
			{
				$("#abt_me").addClass("abt_me_anim");
			}

			if((positiontop>3050)&&(positiontop<3200))
			{
				$("#project1").addClass("project1_anim");
				$("#project2").addClass("project2_anim");
				$("#project3").addClass("project3_anim");
			}

			if((positiontop>3750)&&(positiontop<3900))
			{
				$("#footer_img").addClass("footer_img_anim");
				$("#footer_text").addClass("footer_text_anim");
			}
		})
	})