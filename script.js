let startTime, updateTime, difference, timerInterval;
let running = false;
let lapCounter = 1;

function updateDisplay(diff){
    let milliseconds = Math.floor((diff%1000)/10);
    let seconds = Math.floor((diff/1000)%60);
    let minutes = Math.floor((diff/(1000*60))%60);

    document.getElementById("display").textContent = `${String(minutes).padStart(2, "0")}:` + `${String(seconds).padStart(2, ")")}:` + `${String(milliseconds).padStart(2, "0")}`;
};

function startStopwatch(){
    if(!running){
        running = true;
        startTime = Date.now() - (difference || 0);
        timerInterval = setInterval(() => {
            updatedTime = Date.now();
            difference = updatedTime - startTime;
            updateDisplay(difference);
        }, 10);
    }
};

function pauseStopwatch(params) {
    if(running){
        running = false;
        clearInterval(timerInterval);
    }
}

function resetStopwatch(){
    running = false;
    clearInterval(timerInterval);
    difference = 0;
    lapCounter = 1;

    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("lap").innerHTML = "";
}

function lapTime(){
    if(running){
        const lapItem = document.createAttribute('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${document.getElementById("display").textContent}`;
        document.getElementById("lap").appendChild(lapItem);
    }
}