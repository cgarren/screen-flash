let index = 0;
let startTime;
let id = null;
let prevPerfTime = 0;

const colors = ['red', 'white'];
const hertz = 1;
const interval = 1 / hertz * 1000 / colors.length;

function animate2() {
  setInterval(() => {
    if (index == 0) {
      const now = performance.now();
      const delta = now - prevPerfTime;
      prevPerfTime = now;
      console.log(delta);
    }
    document.getElementById("mydiv").style.backgroundColor = colors[index];
    if (++index > colors.length - 1) { index = 0; }
  }, interval);
}

function animate(time) {
  id = requestAnimationFrame(animate);

  if (!startTime) { startTime = time; }
  if (time - startTime > interval) {
    startTime = time;
    document.getElementById("mydiv").style.backgroundColor = colors[index];
    if (index == 0) {
      currentPerfTime = performance.now();
      console.log(currentPerfTime - prevPerfTime);
      prevPerfTime = currentPerfTime;
    }
		if (++index > colors.length - 1) { index = 0; }
  }
}

function startBlink() {
  document.getElementById("mydiv").style.backgroundColor = colors[-1];
  requestAnimationFrame(animate);
  //animate2();
}

startBlink();