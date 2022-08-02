// JavaScript Document
var opts = {
	lines: 11, // The number of lines to draw
	length: 8, // The length of each line
	width: 5, // The line thickness
	radius: 12, // The radius of the inner circle
	corners: 1, // Corner roundness (0..1)
	rotate: 0, // The rotation offset
	color: '#000', // #rgb or #rrggbb
	speed: 1, // Rounds per second
	trail: 60, // Afterglow percentage
	shadow: false, // Whether to render a shadow
	hwaccel: false, // Whether to use hardware acceleration
	className: 'spinner', // The CSS class to assign to the spinner
	//zIndex: 2e9, // The z-index (defaults to 2000000000)	
	top: '50%',//'auto', // Top position relative to parent in px
	left: '50%'//'auto' // Left position relative to parent in px
};
var target;
var spinner;

//Loading轉動圖示
//開始轉動
function startSpin() {
    document.getElementById('spin').style.display = "";

	if (spinner == null) {
		//轉動吧
		target = document.getElementById('foo');
		spinner = new Spinner(opts).spin(target);
	} else {
		//轉動吧
		spinner.spin(target);
	}
}

//停止轉動
function stopSpin() {
	document.getElementById('spin').style.display = "none";
	spinner.stop();
}