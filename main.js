// PASTE THIS WHOLE FILE INTO CONSOLE ON DIEP.IO TO ACTIVATE

var mouse_x;
var mouse_y;
var key_UP = 87;
var key_LEFT = 65;
var key_DOWN = 83;
var key_RIGHT = 68;

onmousemove = function(e){mouse_x = e.clientX; mouse_y = e.clientY}
oncontextmenu = function() {
	if(key_UP == 87) {
		key_UP = 83;
		key_LEFT = 68;
		key_DOWN = 87;
		key_RIGHT = 65;
	} else {
		key_UP = 87;
		key_LEFT = 65;
		key_DOWN = 83;
		key_RIGHT = 68;
	}
}

setInterval(function() {
	input.keyUp(key_UP);
	input.keyUp(key_LEFT);
	input.keyUp(key_DOWN);
	input.keyUp(key_RIGHT);
	
	var distance_x = mouse_x - window.innerWidth / 2;
	var distance_y = 0 - (mouse_y - window.innerHeight / 2);
	
	var x_change = Math.sin(Math.atan2(distance_x, distance_y));
	var y_change = Math.cos(Math.atan2(distance_x, distance_y));
	
	var x_speed_proto = Math.abs(distance_x) / (window.innerWidth / 4);
	var y_speed_proto = Math.abs(distance_y) / (window.innerHeight / 4);
	var x_speed = x_speed_proto < 1 ? x_speed_proto : 1;
	var y_speed = y_speed_proto < 1 ? y_speed_proto : 1;

	if(x_change * x_speed < 0 - Math.random()) {
		input.keyDown(key_LEFT);
    } else if(x_change * x_speed > Math.random()) {
		input.keyDown(key_RIGHT);
    }
	
	if(y_change * y_speed < 0 - Math.random()) {
		input.keyDown(key_DOWN);
    } else if(y_change * y_speed > Math.random()) {
		input.keyDown(key_UP);
    }
}, 10);
