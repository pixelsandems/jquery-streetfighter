$(document).ready(function() {
	var ryuStill=$('.ryu-still');
	var ryuReady=$('.ryu-ready');
	var ryuCool=$('.ryu-cool');
	var ryuThrowing=$('.ryu-throwing');
	var hadouken=$('.hadouken');
	var hadoukenSound=$('#hadouken-sound');

	$('.ryu').mouseenter(function() {
		ryuStill.hide();
		ryuReady.show();
		ryuCool.hide();	
	})
	.mouseleave(function() {
		ryuReady.hide();
		ryuStill.show();
		ryuCool.hide();	
	})
	.mousedown(function() {
		playHadouken();
		ryuReady.hide();
		ryuThrowing.show();
		hadouken.finish().show().animate(
			{'left': '1020px'},
			500,//# of milliseconds for ani
			function() {
				/*console.log (this);*/
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function() {
		ryuThrowing.hide();
		ryuReady.show();
		// ryu goes back to his ready position
	})

 	$(document).keydown (function(event) {
 		/*console.log(event);*/
        if (event.keyCode == 88) {
            ryuStill.hide();
            ryuReady.hide();
            ryuThrowing.hide();
            ryuCool.show();
        }
     })
        .keyup (function(event) {
        	if (event.keyCode == 88) {
        	ryuStill.show();
            ryuReady.hide();
            ryuThrowing.hide();
            ryuCool.hide();	
        }
     });

function playHadouken () {
	hadoukenSound[0].volume = 0.5;
	hadoukenSound[0].load();
	hadoukenSound[0].play();
	}
});