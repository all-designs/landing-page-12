(function ($) {

	//Schedule Box Tabs
	if ($('.schedule-box').length) {

		//Tabs
		$('.schedule-box .tab-btn').on('click', function () {
			var target = $($(this).attr('data-id'));
			$('.schedule-box .tab-btn').removeClass('active');
			$(this).addClass('active');
			$('.schedule-box .tab').fadeOut(0);
			$('.schedule-box .tab').removeClass('current');
			$(target).fadeIn(300);
			$(target).addClass('current');
			var windowWidth = $(window).width();
			if (windowWidth <= 700) {
				$('html, body').animate({
					scrollTop: $('.tabs-box').offset().top
				}, 1000);
			}
		});

		//Accordion
		$('.schedule-box .hour-box .toggle-btn').on('click', function () {
			var target = $($(this).next('.content-box'));
			$(this).toggleClass('active');
			$(target).slideToggle(300);
			$(target).parents('.hour-box').toggleClass('active-box');
		});

	}

})(window.jQuery);