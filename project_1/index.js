function loadScript(src, callback) {
	const script = document.createElement('script');
	script.src = src;
	script.onload = callback;
	document.head.insertAdjacentElement('beforeend', script);
}
loadScript(['./common.js', './b.js', './c.js'], () => {

});
// loadScript((), () => {

// });
loadScript('./common.js', () => {
	log();
	console.log("load index.js");
})