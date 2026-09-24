const exercisingTimeM = document.getElementById("exerciseInputExercisingM");
const exercisingTimeS = document.getElementById("exerciseInputExercisingS");
const separationTimeM = document.getElementById("exerciseInputSeparationM");
const separationTimeS = document.getElementById("exerciseInputSeparationS");
const loopCheck = document.getElementById("exerciseLoop");

let exercisingTimer;
let separationTimer;
let lessMinutesExercising;
let lessSecondsExercising;
let lessMinutesSeparation;
let lessSecondsSeparation;
let separation = true;

function exerciseStartTimer(){
    const exercisingMinutes = Number(exercisingTimeM.value);
    const separationMinutes = Number(separationTimeM.value);
    //let separationSeconds = separationMinutes * 60;
    //let exercisingSeconds = exercisingMinutes * 60;
    let separationSeconds = separationMinutes;
    let exercisingSeconds = exercisingMinutes;

    separationTimer = setInterval(() => {
        if(separationSeconds>0){
            separationSeconds-=1;

            lessMinutesSeparation = Math.floor((separationSeconds % 3600) / 60);
            lessSecondsSeparation = separationSeconds % 60;

            separationTimeM.value = lessMinutesSeparation;
            separationTimeS.value = lessSecondsSeparation;
        }else if(exercisingSeconds>0){
            exercisingSeconds-=1;

            lessMinutesSeparation = Math.floor((exercisingSeconds % 3600) / 60);
            lessSecondsSeparation = exercisingSeconds % 60;

            exercisingTimeM.value = lessMinutesSeparation;
            exercisingTimeS.value = lessSecondsSeparation;
        }else if(separationSeconds == 0 && exercisingSeconds == 0 && loopCheck.checked){
            separationSeconds = separationMinutes;
            exercisingSeconds = exercisingMinutes;
        }
    }, 1000);
}

function exerciseStopTimer(){
    clearInterval(separationTimer);
    clearInterval(exercisingTimer);
}

function exerciseResetTimer(){
    exercisingTimeM.value = "";
    exercisingTimeS.value = "";
    separationTimeM.value = "";
    separationTimeS.value = "";
    clearInterval(separationTimer);
    clearInterval(exercisingTimer);
}


