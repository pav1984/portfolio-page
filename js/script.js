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
}, 3000);

//Validate form

$(document).ready(function() {
	$('#input-submit').click(function(event) {
		const name = $('#input-name').val();
		const email = $('#input-email').val();
		const subject = $('#input-subject').val();
		const msg = $('#input-message').val();
		const status = $('.status');
		status.empty();

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			// status.append('<div>Email is valid</div>');
			// email.empty();
		} else {
			event.preventDefault();
			status.append('<div>Email is not valid</div>');
		}
		if (name.length >= 2) {
			// status.append('<div>Name is valid</div>');
			// name.empty();
		} else {
			event.preventDefault();
			status.append('<div>Name is not valid</div>');
		}
		if (subject.length >= 2) {
			// status.append('<div>Subject is valid</div>');
			// subject.empty();
		} else {
			event.preventDefault();
			status.append('<div>Subject is not valid</div>');
		}
		if (msg.length >= 15) {
			// status.append('<div>Message is valid</div>');
			// msg.empty();
		} else {
			event.preventDefault();
			status.append('<div>Message is not valid</div>');
		}
	});
});
