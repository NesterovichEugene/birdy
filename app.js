$(document).ready(function () {
	$(".again").click(function(){ //button try again - reload page
		location.reload();
	});

	$(".button").click(function(){ //start game ig clicked start button

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
		var new_pipe_value = right_value1 + 800; //distance for new pipe appearing
		var score = parseInt($('.score').text());


		var drop = setInterval(function () { //if bird is down
			if (bottom_value < 0) {
				clearInterval(drop);
				$('.over').show();
				$('.again').show();
			}

			right_value1 += 2;
			$('.block.one').css("right", right_value1.toString() + "px"); //pipes1 move
			right_value2 += 2;
			$('.block.two').css("right", right_value2.toString() + "px"); //pipes2 move
			right_value3 += 2;
			$('.block.three').css("right", right_value3.toString() + "px"); //pipes3 move

			if (right_value1 === new_pipe_value) { //appearing new pipe, randomize a hight and increase score
				right_value3 = -200;
				$('.block.three .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.three .top').css("bottom", (parseInt($('.block.three .down').css("bottom").replace("px", "")) + 573).toString() + "px");
				score ++;
				$('.score').text(score);
			}
			if (right_value2 === new_pipe_value) { //appearing new pipe, randomize a hight and increase score
				right_value1 = -200;
				$('.block.one .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.one .top').css("bottom", (parseInt($('.block.one .down').css("bottom").replace("px", "")) + 573).toString() + "px");
				score ++;
				$('.score').text(score);
			}
			if (right_value3 === new_pipe_value) { //appearing new pipe, randomize a hight and increase score
				right_value2 = -200;
				$('.block.two .down').css("bottom", (Math.floor(Math.random() * (0 - (-290) + 1)) + (-290)).toString() + "px");
				$('.block.two .top').css("bottom", (parseInt($('.block.two .down').css("bottom").replace("px", "")) + 573).toString() + "px");
				score ++;
				$('.score').text(score);
			}

			if (parseInt($('#bird').css("right").replace("px", "")) <= right_value1 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value1) {
				if (bottom_value <= parseInt($('.block.one .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check bottom pipe in 1 block
				}
				if (bottom_value + 50 >= parseInt($('.block.one .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check top pipe in 1 block
				}
			}

			else if (parseInt($('#bird').css("right").replace("px", "")) <= right_value2 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value2) {
				if (bottom_value <= parseInt($('.block.two .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check bottom pipe in 2 block
				}
				if (bottom_value + 50 >= parseInt($('.block.two .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check top pipe in 2 block
				}
			}

			else if (parseInt($('#bird').css("right").replace("px", "")) <= right_value3 + 100 && parseInt($('#bird').css("right").replace("px", "")) + 50 >= right_value3) {
				if (bottom_value <= parseInt($('.block.three .down').css("bottom").replace("px", "")) + 400) {  //check bottom pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check bottom pipe in 3 block
				}
				if (bottom_value + 50 >= parseInt($('.block.three .top').css("bottom").replace("px", ""))) {  //check top pipe
					clearInterval(drop);
					$('.over').show();
					$('.again').show(); //check top pipe in 3 block
				}
			}

			bottom_value -= 2;
			$('#bird').css("bottom", bottom_value.toString() + "px"); //bird move

		}, 10);

		$(document).keydown(function (key) { //bird jump
			if (key.keyCode === 32) {
				bottom_value += 70;
				$('#bird').css("bottom", bottom_value.toString() + "px");
			}
		});
	});
});