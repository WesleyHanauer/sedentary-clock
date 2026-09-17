window.addEventListener('load', () => {
    document.getElementById("timerForm").reset();
});

const timerForm = document.getElementById("timerForm");
const timerButton = document.getElementById("startTimer");
const countDown = document.getElementById("countDown");

const hoursInput = document.getElementById("inputH");
const minutesInput = document.getElementById("inputM");
const secondsInput = document.getElementById("inputS");

let counterMs = document.getElementById("counterMs");
let counterSeconds = document.getElementById("counterSeconds");
let time = 0;
let pausedTime = 0;
let counter;
let timer;
let lessHours;
let lessMinutes;
let lessSeconds;
let rest;

function startTimer(){
    const hours = Number(document.getElementById("inputH").value);
    const minutes = Number(document.getElementById("inputM").value);
    const seconds = Number(document.getElementById("inputS").value);
    let totalSeconds = ((hours * 60) * 60) + (minutes * 60) + seconds;
    timer = setInterval(() => {
        if(totalSeconds>0){
            totalSeconds-=1;
            lessHours = Math.floor(totalSeconds / 3600);
            lessMinutes = Math.floor((totalSeconds % 3600) / 60);
            lessSeconds = totalSeconds % 60;
            hoursInput.value = lessHours;
            minutesInput.value = lessMinutes;
            secondsInput.value = lessSeconds;
        }
    }, 1000);
}

function startCounter(){
    if(counterMs.textContent == "0"){
        counter = setInterval(() => {
            time++;
            counterMs.textContent = time;
            if(time==1000){
                counterSeconds.textContent += 1;
                time = 0;
            }
        }, 1);
    }
    /***
else{
        time = pausedTime;
        counter = setInterval(() => {
            time++;
            counterMs.textContent = time;
        }, 1);
    }
     * */
}

function stopCounter(){
    counterMs.textContent = time;
    pausedTime = time;
    clearInterval(counter);
}

function resetCounter(){
    time = 0;
    counterMs.textContent = time;
    clearInterval(counter);
}