const hamburger = document.querySelector(".header__menu");
const close = document.querySelector(".header__close");
const navbar = document.querySelector(".navbar");
const dropBtn = document.querySelectorAll(".dropdown__btn");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("none");
	close.classList.toggle("none");
	navbar.classList.toggle("show");
});

close.addEventListener("click", () => {
	hamburger.classList.toggle("none");
	close.classList.toggle("none");
	navbar.classList.toggle("show");
});

dropBtn.forEach((d) => {
	d.addEventListener("click", () => {
		d.nextElementSibling.classList.toggle("show");
	});
});
