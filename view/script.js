const urlElem = document.getElementById('url');
const statusElem = document.getElementById('status');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);

let isPaused = false;

function start() {
	window.electron.startScraping(urlElem.value);
	statusElem.innerHTML = 'Started';
}

function pause() {
	window.electron.pauseScraping();
	
	isPaused = !isPaused;

	statusElem.innerHTML = isPaused ? 'Paused' : 'Running';
	pauseButton.innerText = isPaused ? '⏺️' : '⏸️';
}

function stop() {
	window.electron.stopScraping();
	statusElem.innerHTML = 'Stopped';
}