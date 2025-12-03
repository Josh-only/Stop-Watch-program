const display = document.getElementById("display");
let timer = null;
let StartTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start() {
    if (!isRunning){
        StartTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
   document.getElementById("myH1").innerHTML = "The stop watch is running";
}

function stop() {
 if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - StartTime;
    isRunning = false;
   
 }

}

function reset() {
clearInterval(timer);
 StartTime = 0;
 elapsedTime = 0;
 isRunning = false;
 display.textContent = "00: 00:00:00";

}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - StartTime;

    let  hours = Math.floor(elapsedTime / (1000 * 60 * 60 ));
    let minutes = Math.floor( elapsedTime / (1000 *  60 ) % 60);
    let Seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);


    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    Seconds = String(Seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}: ${minutes}:${Seconds}: ${milliseconds}`;

} 