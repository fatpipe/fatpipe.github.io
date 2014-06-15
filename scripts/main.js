document.querySelector('video').load();
document.querySelector('video').addEventListener('canplaythrough', function () {
	document.querySelector('video').style.opacity = 1;
});