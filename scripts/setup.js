const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const info = document.getElementById("info");

regularTimerForm.style.display = "none";

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
    regularTimerForm.style.display = "none";
});

function selectChange(){
    const timerType = document.getElementById("timerOption").value;

    if (timerType === "regularTimer") {
        regularTimerForm.style.display = "flex";
        exerciseTimerForm.style.display = "none";
        info.style.display = "none";
    } else if (timerType === "exerciseTimer") {
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
        info.style.display = "flex";
    }
}