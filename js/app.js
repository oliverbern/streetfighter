$( document ).ready(function() {
	$('.ryu').mouseenter(function() {
		//alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.explaination').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-200px');
			});
	});
	$('.ryu').mouseup(function() {
		$('.ryu-ready').show();
		$('.explaination').show();
		$('.ryu-throwing').hide();
	});

	$(document).keydown([88], function () {
	        $(".ryu-still").hide();
	        $(".ryu-ready").hide();
	        $('.explaination').hide();
	        $(".ryu-throwing").hide();
	        $(".ryu-cool").show();
	 });

	$(document).keyup([88], function () {
        $(".ryu-still").show();
        $('.explaination').show();
        $(".ryu-ready").hide();
        $(".ryu-throwing").hide();
        $(".ryu-cool").hide();
  	});

})
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}