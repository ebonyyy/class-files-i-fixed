
// state
let hero = new Hero()
let keyPressed = {}

// setup a function to run whenever a key is pressed
window.addEventListener("keydown", event => {
  keyPressed[event.code] = true
})
window.addEventListener("keyup", event => {
  keyPressed[event.code] = false
})

function loop() {
  console.log(keyPressed)
  if (keyPressed["ArrowUp"]) {
    hero.jump()
  }
  if (keyPressed["ArrowLeft"]) {
    hero.moveLeft()
  }
  if (keyPressed["ArrowRight"]) {
    hero.moveRight()
  }

  hero.step()

  // draw everything
  ERASE()
  hero.draw()

  // run loop again!
  setTimeout(loop, 1000 / 60)
}

// run loop once on startup to get it started
loop()
