var index = 0;
var startTime;
var colors = ['red', 'white'];
var id = null;

const hertz = 1;
const interval = 1 / hertz * 1000 / colors.length;

function animate(time) {
  id = requestAnimationFrame(animate);

  if (!startTime) { startTime = time; }
  var elapsed = time - startTime;
  if (elapsed > interval) {
		startTime = time;
		console.log("setting color to " + colors[index]);
		document.getElementById("mydiv").style.backgroundColor = colors[index];
		if (++index > colors.length - 1) { index = 0; }
  }
}

function startBlink() {
  requestAnimationFrame(animate);
}

startBlink();