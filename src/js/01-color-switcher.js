const body = document.querySelector('body');
const start= document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);
stop.disabled = true;
let intervalId = null;

function onStartClick() {
  // console.log('start');
  start.disabled = true;
  stop.disabled = false;

  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  // console.log('stop');
  start.disabled = false;
  stop.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}