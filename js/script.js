//FUNCIONALITY FOR HAMBURGER-MENU

function toggleMenu() {
	document.querySelector('.menu-links').classList.toggle('navbar-hidden');
}
document.querySelector('.menu-btn').addEventListener('click', function(e) {
	e.preventDefault();
	toggleMenu();
});

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
