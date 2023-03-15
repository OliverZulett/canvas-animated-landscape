let trees = generateTrees();

function generateTrees() {
  const positions = [];
  for (let index = 0; index < 30; index++) {
    positions.push(generateRandomTree());
  }
  return positions;
}

function generateRandomTree(
  origin = randomIntFromInterval(50, CANVAS_WIDTH + CANVAS_WIDTH / 2)
) {
  const TREE_COLORS = ["#ff6363", "#5b124a", "#320040"];
  return {
    origin: origin,
    trunkWidth: randomIntFromInterval(10, 25),
    trunkHeight: randomIntFromInterval(50, 100),
    treeWidth: randomIntFromInterval(50, 100),
    treeHeight: randomIntFromInterval(50, 75),
    color: TREE_COLORS[randomIntFromInterval(0, 2)],
  };
}

function moveTree2() {
  trees = trees.map((tree) => {
    if (tree.origin === 0) {
      tree = generateRandomTree(
        randomIntFromInterval(CANVAS_WIDTH, CANVAS_WIDTH + CANVAS_WIDTH / 2)
      );
    }
    drawTree(tree);
    tree.origin--;
    return tree;
  });
}

function drawTree(treeProps) {
  const { trunkWidth, trunkHeight, treeWidth, origin, treeHeight, color } =
    treeProps;
  drawSquare(
    origin,
    CANVAS_HEIGHT - trunkHeight,
    trunkWidth,
    trunkHeight,
    color
  );
  for (let index = 0; index < 3; index++) {
    drawTriangle2(
      {
        x0: 10 * index + origin - treeWidth / 2 + trunkWidth / 2,
        y0: CANVAS_HEIGHT - (trunkHeight + 25 * index),
        x1: treeWidth / 2 + origin - treeWidth / 2 + trunkWidth / 2,
        y1: CANVAS_HEIGHT - (trunkHeight + treeHeight + 25 * index),
        x2: treeWidth - 10 * index + origin - treeWidth / 2 + trunkWidth / 2,
        y2: CANVAS_HEIGHT - (trunkHeight + 25 * index),
      },
      color
    );
  }
}
