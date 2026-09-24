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

function exerciseStartTimer(){
    const separationMinutesInput = Number(separationTimeM.value);
    const separationSecondsInput = Number(separationTimeS.value);
    const exercisingMinutesInput = Number(exercisingTimeM.value);
    const exercisingSecondsInput = Number(exercisingTimeS.value);

    let separationSeconds = (separationMinutesInput * 60) + separationSecondsInput;
    let exercisingSeconds = (exercisingMinutesInput * 60) + exercisingSecondsInput;

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
            separationSeconds = (separationMinutesInput * 60) + separationSecondsInput;
            exercisingSeconds = (exercisingMinutesInput * 60) + exercisingSecondsInput;
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


