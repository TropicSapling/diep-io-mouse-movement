var mouse_x;
var mouse_y;
onmousemove = function(e){mouse_x = e.clientX; mouse_y = e.clientY}

setInterval(function() {
	input.keyUp(65);
	input.keyUp(68);
	input.keyUp(83);
	input.keyUp(87);
	
	var x_change = Math.sin(Math.atan2(mouse_x - window.innerWidth / 2, - (mouse_y - window.innerHeight / 2)));
	var y_change = Math.cos(Math.atan2(mouse_x - window.innerWidth / 2, - (mouse_y - window.innerHeight / 2)));

	if(x_change < 0 - Math.random() * 1.5) {
		input.keyDown(65)
    } else if(x_change > Math.random() * 1.5) {
		input.keyDown(68);
    }
	
	if(y_change < 0 - Math.random() * 1.5) {
		input.keyDown(83);
    } else if(y_change > Math.random() * 1.5) {
		input.keyDown(87);
    }
}, 10);