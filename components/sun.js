let sun = {
  x: 0,
  y: 0,
  radius: 100,
  color: '#ffffff'
}

function drawSun(sunProps) {
  const { x, y, radius, color } = sunProps
  drawCircle(x, y, radius, color, color)
}

function moveSun() {
  if (sun.x === CANVAS_WIDTH) {
    sun.x = 0;
    sun.y += 100
  }
  if (sun.y === CANVAS_HEIGHT) {
    sun.y = 0
  }
  drawSun(sun)
  sun.x += 0.25;
}