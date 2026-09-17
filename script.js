window.addEventListener('load', () => {
    document.getElementById("timerForm").reset();
});

const timerForm = document.getElementById("timerForm");
const timerButton = document.getElementById("startTimer");

const hoursInput = document.getElementById("inputH");
const minutesInput = document.getElementById("inputM");
const secondsInput = document.getElementById("inputS");

var audio = new Audio('./public/audio/alarm.mp3');
audio.currentTime = 1;

let timer;
let lessHours;
let lessMinutes;
let lessSeconds;

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
        }else{
            clearInterval(timer);
            audio.play();
            alert("Timer done");
            audio.pause();
            audio.currentTime = 1;
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

function resetTimer(){
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    clearInterval(timer);
}