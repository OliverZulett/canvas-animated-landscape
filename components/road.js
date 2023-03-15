let roadDirection = CANVAS_WIDTH;
let roadSpeed = 1000;
let markLinesPositions = generateMarkLines();

function generateMarkLines() {
  const positions = [];
  for (let index = 0; index < CANVAS_WIDTH / 100; index++) {
    positions.push(index * 100);
  }
  return positions;
}

function drawRoad() {
  drawSquare(0, CANVAS_HEIGHT - 50, CANVAS_WIDTH, 50, '#210037');
}

function drawBorderLine() {
  drawLine(0, CANVAS_HEIGHT - 45, CANVAS_WIDTH, CANVAS_HEIGHT - 45, 'white', 2);
}

function generateMarkLine(origin) {
  drawSquare(origin, CANVAS_HEIGHT - 25, 30, 10, 'white');
}

function moveRoad() {
  drawRoad();
  drawBorderLine();

  markLinesPositions = markLinesPositions.map((position) => {
    if (position === 0) {
      position = CANVAS_WIDTH;
    }
    generateMarkLine(position);
    position--;
    return position;
  });
}
