$(document).ready(function () {
	$(".again").click(function(){
		location.reload();
	});

	$(".button").click(function(){

		$(".game-status").hide();
		$('.rules').hide();
		$('.button').hide();

		$('.score').show();
		$('#bird').show();
		$('#blocks').show();

		var bottom_value = parseInt($('#bird').css("bottom").replace("px", "")); //for bird's jumps
		var right_value1 = parseInt($('.block.one').css("right").replace("px", "")); //for moving pipes
		var right_value2 = parseInt($('.block.two').css("right").replace("px", "")); //for moving pipes
		var right_value3 = parseInt($('.block.three').css("right").replace("px", "")); //for moving pipes
		var new_pipe_value = right_value1 + 800;
		var score = parseInt($('.score').text());
		var check = 1;


		var drop = setInterval(function () {
			if (bottom_value < 0) {
				clearInterval(drop);
				$('.over').show();
				$('.again').show();
			}

			right_value1 += 2;
			$('.block.one').css("right", right_value1.toString() + "px"); //pipe move
			right_value2 += 2;
			$('.block.two').css("right", right_value2.toString() + "px"); //pipe move
			right_value3 += 2;
			$('.block.three').css("right", right_value3.toString() + "px"); //pipe move

			if (right_value1 === new_pipe_value) {
				right_value3 = -200;
				$('.block.three .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.three .top').css("bottom", (parseInt($('.block.three .down').css("bottom").replace("px", "")) + 573).toString() + "px");
			}
			if (right_value2 === new_pipe_value) {
				right_value1 = -200;
				$('.block.one .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.one .top').css("bottom", (parseInt($('.block.one .down').css("bottom").replace("px", "")) + 573).toString() + "px");
			}
			if (right_value3 === new_pipe_value) {
				right_value2 = -200;
				$('.block.two .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.two .top').css("bottom", (parseInt($('.block.two .down').css("bottom").replace("px", "")) + 573).toString() + "px");
			}

			if (parseInt($('#bird').css("right").replace("px", "")) <= right_value1 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value1) {
				while(check > 0){
					score ++;
					$('.score').text(score);
					check --;
				}
				if (bottom_value <= parseInt($('.block.one .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
				if (bottom_value + 50 >= parseInt($('.block.one .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
			}

			else if (parseInt($('#bird').css("right").replace("px", "")) <= right_value2 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value2) {
				while(check > 0){
					score ++;
					$('.score').text(score);
					check --;
				}
				if (bottom_value <= parseInt($('.block.two .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
				if (bottom_value + 50 >= parseInt($('.block.two .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
			}

			else if (parseInt($('#bird').css("right").replace("px", "")) <= right_value3 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value3) {
				while(check > 0){
					score ++;
					$('.score').text(score);
					check --;
				}
				if (bottom_value <= parseInt($('.block.three .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
				if (bottom_value + 50 >= parseInt($('.block.three .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show();
				}
			}

			else{
				check =1;
			}

			bottom_value -= 2;
			$('#bird').css("bottom", bottom_value.toString() + "px"); //bird move

		}, 10);

		$(document).keydown(function (key) {
			if (key.keyCode === 32) {
				bottom_value += 70;
				$('#bird').css("bottom", bottom_value.toString() + "px");
			}
		});
	});
});