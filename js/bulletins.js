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

window.addEventListener('scroll', scrollActive);
