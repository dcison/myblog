$(document).ready(function () {

	//url(../img/timg.jpg)center center/cover no-repeat;
	var bg = 'img/timg.jpg';
	var img = new Image();
	img.src = bg;
(function (callback) {
		img.onload =function(){
		$('#bg').css('background', 'url("img/timg.jpg") center center/cover no-repeat');
		setTimeout(function () {
			$("#loading").fadeOut('fast');
			$('body').css('overflow', '');
			(callback && typeof(callback) === "function") && callback();
		}, 1000);
		}
		
	})(function(){
	$(document).snowfall('clear');
	$(document).snowfall({
		image: "img/huaban.png",
		flakeCount: 20,
		minSize: 8,
		maxSize: 15
	});
	});
	


})

