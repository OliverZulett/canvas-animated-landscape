console.log("hello mountains");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

let mountains = generateMountains(4);
console.log(mountains);

drawMountains(mountains);

function generateMountains(mountainsQuantity) {
  let mountains = [];
  let lastOrigin = 50;
  for (let index = 0; index < mountainsQuantity; index++) {
    let mountain = {
      color: randomColor(),
      origin: randomIntFromInterval(50, CANVAS_WIDTH / 4),
      height: randomIntFromInterval(300, CANVAS_HEIGHT - 250),
      separationRate: randomIntFromInterval(80, 180),
    };
    const { color, peaksNumber, separationRate, origin, height } = mountain;
    let peaks = [];
    for (let peak = 0; peak < 3; peak++) {
      peaks.push({
        origin: origin + peak * separationRate,
        height:
          peak === 1
            ? height
            : randomIntFromInterval(height - height / 4, height - height / 6),
        separationRate: randomIntFromInterval(
          origin + separationRate / 4,
          origin + separationRate / 2
        ),
      });
    }
    mountain = { ...mountain, peaks: peaks };
    mountains.push(mountain);
    // lastOrigin = 
  }
  return mountains;
}

function drawMountains(mountains) {
  mountains.forEach((mountainProps) => drawMountain(mountainProps));
}

function drawMountain(mountainProps) {
  const { color, peaks } = mountainProps;
  peaks.forEach((peak) => {
    drawTriangle(peak);
  });
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(triangleProps) {
  const { origin, height, separationRate } = triangleProps;
  ctx.beginPath();
  ctx.moveTo(origin, CANVAS_HEIGHT);
  ctx.lineTo(origin + separationRate, CANVAS_HEIGHT - height);
  ctx.lineTo(origin + separationRate * 2, CANVAS_HEIGHT);
  ctx.closePath();
}

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);
