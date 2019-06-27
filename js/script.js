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
menuLinks.addEventListener('click', showMenu);
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
}, 2000);

// PAGE ANIMATION

const sr = ScrollReveal({
	duration: 1000,
	reset: true
});

// Fitst Header
sr.reveal('h1.top', {
	origin: 'right',
	distance: '300px'
});
sr.reveal('h2.bottom', {
	distance: '100px',
	delay: 500
});

//Sections Headers

sr.reveal('.anim-scroll', {
	distance: '80px',
	origin: 'top',
	delay: 200
});

sr.reveal('.text-about', {
	origin: 'right',
	distance: '200px'
});
sr.reveal('.photo-wrapper', {
	origin: 'left',
	distance: '200px'
});

//Technology icons

sr.reveal('.skill', { delay: 200 }, 50);

// Projects

sr.reveal('.left-project', {
	origin: 'left',
	distance: '200px'
});
sr.reveal('.right-project', {
	origin: 'right',
	distance: '200px'
});

sr.reveal('.btn-wrapper', {
	distance: '80px',
	origin: 'top',
	delay: 200
});

// Contact

sr.reveal('#contact', {
	origin: 'left',
	distance: '200px'
});
