let clouds = generateClouds();

function generateClouds() {
  const cloudPositions = [];
  for (let index = 0; index < 8; index++) {
    cloudPositions.push(generateRandomCloud());
  }
  return cloudPositions;
}

function generateRandomCloud(origin = randomIntFromInterval(50, CANVAS_WIDTH)) {
  const CLOUD_COLORS = ['#ffc6b3', '#ff8b8b', '#5b124a'];
  return {
    x: origin,
    y: randomIntFromInterval(100, CANVAS_HEIGHT / 2),
    radius: randomIntFromInterval(60, 65),
    color: CLOUD_COLORS[randomIntFromInterval(0, 2)],
  };
}

function drawCloud(cloudProps) {
  const { x, y, radius, color } = cloudProps;
  for (let index = 0; index < 3; index++) {
    drawSemiCircle(
      x + 100 * index,
      y,
      index === 1 ? radius : radius - index * 10,
      color
    );
  }
}

function moveClouds() {
  clouds = clouds.map((cloud) => {
    if (cloud.x === 0) {
      cloud = generateRandomCloud(
        randomIntFromInterval(CANVAS_WIDTH, CANVAS_WIDTH + CANVAS_WIDTH / 2)
      );
    }
    drawCloud(cloud);
    cloud.x--;
    return cloud;
  });
}
