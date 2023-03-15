const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;
let speed = 10;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
}

function clearCanvas() {
  drawSquare(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, '#ffe8e1');
}

function drawSquare(xi, yi, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xi, yi, w, h);
}

function drawLine(x0, y0, x1, y1, color, width = 5) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawTriangle2(coordinates, fillColor) {
  const { x0, y0, x1, y1, x2, y2 } = coordinates;
  // the triangle
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();

  // the outline
  // ctx.lineWidth = 10;
  // ctx.strokeStyle = '#666666';
  // ctx.stroke();

  // the fill color
  ctx.fillStyle = fillColor;
  ctx.fill();
}

function drawSemiCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI, true);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawCircle(x, y, radius, fillColor, strokeColor) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.fill();
}
