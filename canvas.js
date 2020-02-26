// set the canvas "resolution" to match the screen
let CANVAS = document.getElementById("display")
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight

// create 2D context object for drawing on the CANVAS
let CTX = CANVAS.getContext("2d")

// draw a blue rectangle the size of the screen
function ERASE() {
  CTX.fillStyle = "pink"
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)
}

let GRIDSIZE = CANVAS.height / 12
