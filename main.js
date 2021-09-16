var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
lineWidth = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastPositionOfX = current_position_of_mouse_x;
    lastPositionOfY = current_position_of_mouse_y;
}


canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}