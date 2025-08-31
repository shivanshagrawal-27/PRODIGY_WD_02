let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return `${hrs.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStop() {
  if (isRunning) return;

  isRunning = true;
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("time").textContent = timeToString(elapsedTime);
  }, 1000);
}

function pauseResume() {
  if (!isRunning) return;

  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (!isRunning) return;

  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}
