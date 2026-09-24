const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const info = document.getElementById("info");

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
});

function selectChange() {
    setTimeout(function() {
        window.location.reload();
    }, 100);
}

const timerType = document.getElementById("timerOption").value;

if(timerType == "regularTimer"){
    exerciseTimerForm.style.display = "none";
    info.style.display = "none";
}else if(timerType == "exerciseTimer"){
    regularTimerForm.style.display = "none";
}