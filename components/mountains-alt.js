let mountains = generateMountains();

console.log(mountains);

function generateMountains() {
  const mountainPositions = [];
  for (let index = 0; index < 10; index++) {
    mountainPositions.push(generateRandomMountain());
  }
  return mountainPositions;
}

function generateRandomMountain(
  origin = randomIntFromInterval(0, CANVAS_WIDTH)
) {
  const CLOUD_COLORS = ["#ca1850", "#ff8b8b", "#9d0f51"];
  const separationRate = randomIntFromInterval(80, 180);
  const height = randomIntFromInterval(500, 700);
  let width = 0;
  let peaks = [];
  for (let peak = 0; peak < 3; peak++) {
    const peakWidth = randomIntFromInterval(400, 750);
    peaks.push({
      origin: origin + peakWidth * peak,
      height: randomIntFromInterval(height, 300),
      width: peakWidth,
    });
    width = origin - peakWidth;
  }
  return {
    origin: origin,
    width: width,
    color: CLOUD_COLORS[randomIntFromInterval(0, 2)],
    peaks: peaks,
  };
}

function drawMountain(mountainProps) {
  const { color, peaks, origin } = mountainProps;
  peaks.forEach((peak, index) => {
    const { height, width } = peak;
    drawTriangle2(
      {
        x0: origin,
        y0: CANVAS_HEIGHT,
        x1: width / 2 + origin + 200,
        y1: CANVAS_HEIGHT - height,
        x2: width + origin + 400,
        y2: CANVAS_HEIGHT,
      },
      color
    );
  });
}

function moveMountains() {
  mountains = mountains.map((mountain) => {
    if (mountain.origin === mountain.width * -1) {
      mountain = generateRandomMountain(CANVAS_WIDTH);
    }
    drawMountain(mountain);
    mountain.origin--;
    return mountain;
  });
}
