/*
 * Title: Javascript for L.E.S.
 * Author: Topher Young
 * Version: 1.0
 *
*/


function toggleNav() {
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

$(function() {
    $('.toggle-nav').click(function() {
        toggleNav();
    });
});

$(function() {
$('.nav-trigger').click(function(e) {
  e.preventDefault();
  $('.trigger-top, .trigger-middle, .trigger-bottom').toggleClass('open');
});
});


