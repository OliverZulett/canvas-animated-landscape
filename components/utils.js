function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
}
