const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
});

function selectChange(){
    location.reload();
}

const timerType = document.getElementById("timerOption").value;

if(timerType == "regularTimer"){
    exerciseTimerForm.style.display = "none";
}else if(timerType == "exerciseTimer"){
    regularTimerForm.style.display = "none";
}