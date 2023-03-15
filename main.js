run();

function run() {
  // moveMountain();
  clearCanvas();
  moveSun();
  moveMountains();
  moveTree2();
  moveRoad();
  moveClouds();
  moveCar();
  setTimeout(run, speed);
}

// drawTriangle2({
//   x0: 0,
//   y0: CANVAS_HEIGHT,
//   x1: 200,
//   y1: CANVAS_HEIGHT - 200,
//   x2: 400,
//   y2: CANVAS_HEIGHT,
// }, 'red');

// drawTriangle2({
//   x0: 100,
//   y0: CANVAS_HEIGHT,
//   x1: 300,
//   y1: CANVAS_HEIGHT - 250,
//   x2: 500,
//   y2: CANVAS_HEIGHT,
// }, 'red');

// drawTriangle2({
//   x0: 200,
//   y0: CANVAS_HEIGHT,
//   x1: 400,
//   y1: CANVAS_HEIGHT - 200,
//   x2: 600,
//   y2: CANVAS_HEIGHT,
// }, 'red');
