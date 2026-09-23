const timerForm = document.getElementById("exerciseTimerForm");

const exercisingTimeM = document.getElementById("exerciseInputExercisingM");
const exercisingTimeS = document.getElementById("exerciseInputExercisingS");
const separationTimeM = document.getElementById("exerciseInputSeparationM");
const separationTimeS = document.getElementById("exerciseInputSeparationS");
const loopCheck = document.getElementById("exerciseLoop");


var audio = new Audio('./public/audio/alarm.mp3');
audio.currentTime = 1;

let timer;
let lessMinutes;
let lessSeconds;

function exerciseStartTimer(){
    const exercisingMinutes = Number(document.getElementById("exerciseInputExercisingM").value);
    const separationMinutes = Number(document.getElementById("exerciseInputSeparationM").value);
    let separationSeconds = (minutes * 60) + seconds;
    let exerciseSeconds = (minutes * 60) + seconds;
    timer = setInterval(() => {
        if(separationMinutes>0 && exercisingMinutes>0){
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

function exerciseStopTimer(){
    clearInterval(timer);
}

function exerciseResetTimer(){
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    clearInterval(timer);
}