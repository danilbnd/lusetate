$('.db-carts__list').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	arrows: false,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				autoplaySpeed: 3000,
				dots: false
			}
		},
		{
			breakpoint: 445,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplaySpeed: 3000,
				dots: false
			}
		},
		{
			breakpoint: 321,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplaySpeed: 3000,
				dots: false
			}
		}

	]
});
