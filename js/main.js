/*==================== SHOW MENU ====================*/
const navigation = document.getElementById('navigation');
const logo = document.getElementById('logo');
const navigationHamburger = document.getElementById('navigation__hamburger');

navigationHamburger.addEventListener('click', () => {
	navigation.classList.toggle('is-active');

	if (logo.classList.contains('logo--normal')) {
		logo.classList.remove('logo--normal');
		logo.classList.add('logo--white');
	} else {
		logo.classList.add('logo--normal');
		logo.classList.remove('logo--white');
	}
});

/*==================== SCROLL INDICATPR ====================*/
const progressBar = document.getElementById('progress__bar');
const bulletinIntro = document.getElementById('bulletin__intro');

function scrollActive() {
	const scrollY = window.pageYOffset;

	const progressBarHeight = bulletinIntro.offsetHeight;
	const progressBarTop = bulletinIntro.offsetTop;

	if (scrollY > progressBarTop + progressBarHeight) {
		progressBar.style.width = scrollY - progressBarTop - progressBarHeight + 'px';
	}
}

let URLactual = window.location.href;
let splitRoutes = URLactual.split('/');
let pageBulletin = splitRoutes[splitRoutes.length - 1];

if (pageBulletin === 'bulletins.html') {
	window.addEventListener('scroll', scrollActive);
}
