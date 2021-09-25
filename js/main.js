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
