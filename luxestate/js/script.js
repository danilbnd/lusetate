function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

let menuBtn = document.querySelector('.db-menu-toggle');
let menuWrap = document.querySelector('.db-header__menu');
let logo = document.querySelector('.db-header__logo');

menuBtn.addEventListener('click', ()=> {
	menuWrap.classList.toggle('active');
	logo.classList.toggle('logo-transparent')
});

$('.count748').animate({ num: 748 - 3/* - начало */ },
	{
 duration: 1000,
 step: function (num){
		 this.innerHTML = (num + 3).toFixed(0)
 }
});

$('.count3854').animate({ num: 3854 - 3/* - начало */ },{
 duration: 1000,
 step: function (num){
		 this.innerHTML = (num + 3).toFixed(0)
 }
})
 $('.count24').animate({ num: 24 - 3/* - начало */ }, {
	 duration: 1000,
	 step: function (num){
			 this.innerHTML = (num + 3).toFixed(0)
	 }
 })
	 $('.count14').animate({ num: 14 - 3/* - начало */ },{
		 duration: 1000,
		 step: function (num){
				 this.innerHTML = (num + 3).toFixed(0)
		 }
	 })

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
