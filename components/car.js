let position = 200;

const directions = new Map();

directions.set("ArrowLeft", -10);
directions.set("ArrowRight", 10);

function drawCar() {
  drawSemiCircle(position + 50, CANVAS_HEIGHT - 40, 35, "#569eb4");
  drawSquare(position, CANVAS_HEIGHT - 45, 100, 25, "#569eb4");
  drawCircle(position + 25, CANVAS_HEIGHT - 20, 15, "#86d7b6", "#86d7b6");
  drawCircle(position + 75, CANVAS_HEIGHT - 20, 15, "#86d7b6", "#86d7b6");
}

document.addEventListener("keydown", (keyHandler) => {
  const { key } = keyHandler;
  const dir = directions.has(key) ? directions.get(key) : dir;
  position += dir;
});

function moveCar() {
  drawCar();
}
