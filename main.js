run();

function run() {
  clearCanvas();
  moveSun();
  moveMountains();
  moveTree2();
  moveRoad();
  moveClouds();
  moveCar();
  setTimeout(run, speed);
}


const velocity = new Map();

velocity.set("ArrowUp", -0.5);
velocity.set("ArrowDown", 1);

document.addEventListener("keydown", (keyHandler) => {
  const { key } = keyHandler;
  const vel = velocity.has(key) ? velocity.get(key) : vel;
  speed += vel;
});