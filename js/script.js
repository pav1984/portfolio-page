const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const leftSideMenu = document.querySelector('.menu-left-side');
const menuLinks = document.querySelector('.menu-links');
const navItem = document.querySelectorAll('.nav-item');
let activeMenu = false;

// FUNCIONALITY FOR HAMBURGER-MENU

const showMenu = () => {
	if (!activeMenu) {
		btnMenu.classList.toggle('close');
		menu.classList.toggle('show');
		leftSideMenu.classList.toggle('show');
		menuLinks.classList.toggle('show');
		navItem.forEach((item) => item.classList.toggle('show'));
	}
	activeMenu = false;
};

btnMenu.addEventListener('click', showMenu);

//FUNCIONALITY FOR PARALLAX

const scrollOptions = { capture: false, passive: true };

function onScroll(event) {
	document.querySelector('.hero').style.setProperty('--y', `${window.scrollY}px`);
}

if ('IntersectionObserver' in window) {
	const referenceImage = document.querySelector('.hero-item:last-child');

	const observer = new IntersectionObserver((entries) => {
		let [{ isIntersecting }] = entries;

		if (isIntersecting) {
			window.addEventListener('scroll', onScroll, scrollOptions);
		} else {
			window.removeEventListener('scroll', onScroll, scrollOptions);
		}
	});

	observer.observe(referenceImage);
} else {
	window.addEventListener('scroll', onScroll, scrollOptions);
}

//SCREEN LOADING

setTimeout(function() {
	$('#preloading-screen').fadeOut();
}, 3000);
