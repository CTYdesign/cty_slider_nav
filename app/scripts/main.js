/*
 * Filename: main.js
 *
 * Author(s): Topher Young
 *
 * Scripts for the cty_slider_nav 
 * 
 */

/*
 * Create function to remove/add class to navigation bar
 */
function toggleNav() {
	'use strict';
    if ($('.ctyNavbar').hasClass('show-nav')) {
        $('.ctyNavbar').removeClass('show-nav').addClass('hide-nav');
    } else 
		    if ($('.ctyNavbar').hasClass('hide-nav')) {
		    	$('.ctyNavbar').removeClass('hide-nav').addClass('show-nav');
		    }
		    else {
		        $('.ctyNavbar').addClass('show-nav');
    }
}

/*
 * Trigger and call the toggleNav() function
 */
$(function() {
	'use strict';
    $('.toggle-nav').click(function() {
        toggleNav();
    });
});

/*
 * Animate hamburger icon when clicked
 */
$(function() {
	'use strict';
	$('.nav-trigger').click(function(e) {
	  e.preventDefault();
	  $('.trigger-top, .trigger-middle, .trigger-bottom').toggleClass('open');
	});
});


