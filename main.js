
// *****************************************************************************************************

const displaytimer = document.querySelector('#displaytimer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

start.addEventListener('click', () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updatetime , 75);
    }
});
pause.addEventListener('click', () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now - startTime;
        clearInterval(intervalId);
    }
});
reset.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    displaytimer.textContent = '00:00:00';

});

function updatetime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    displaytimer.textContent = `${hrs.toString().padStart('2', '0')}:${mins.toString().padStart('2','0')}:${secs.toString().padStart('2','0')}`;

}

// *****************************************************************************************************

