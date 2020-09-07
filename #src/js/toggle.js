let menuBtn = document.querySelector('.db-menu-toggle');
let menuWrap = document.querySelector('.db-header__menu');
let logo = document.querySelector('.db-header__logo');

menuBtn.addEventListener('click', ()=> {
	menuWrap.classList.toggle('active');
	logo.classList.toggle('logo-transparent')
});
