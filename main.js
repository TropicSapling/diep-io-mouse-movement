// PASTE THIS WHOLE FILE INTO CONSOLE TO ACTIVATE

var mouse_x;
var mouse_y;
onmousemove = function(e){mouse_x = e.clientX; mouse_y = e.clientY}

setInterval(function() {
	input.keyUp(65);
	input.keyUp(68);
	input.keyUp(83);
	input.keyUp(87);
	
	var distance_x = mouse_x - window.innerWidth / 2;
	var distance_y = 0 - (mouse_y - window.innerHeight / 2);
	
	var x_change = Math.sin(Math.atan2(distance_x, distance_y));
	var y_change = Math.cos(Math.atan2(distance_x, distance_y));

	if(x_change * (distance_x / (window.innerWidth / 2)) < 0 - Math.random()) {
		input.keyDown(65);
    } else if(x_change * (distance_x / (window.innerWidth / 2)) > Math.random()) {
		input.keyDown(68);
    }
	
	if(y_change * (distance_y / (window.innerHeight / 2)) < 0 - Math.random()) {
		input.keyDown(83);
    } else if(y_change * (distance_y / (window.innerHeight / 2)) > Math.random()) {
		input.keyDown(87);
    }
}, 10);
