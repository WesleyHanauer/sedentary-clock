const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const info = document.getElementById("info");
const exerciseTimerRadio = document.getElementById("exerciseTimer");
const regularTimerRadio = document.getElementById("regularTimer");

regularTimerForm.style.display = "none";

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
    regularTimerForm.style.display = "none";
});

const radioButtons = document.querySelectorAll("input[name=timerSelect]");

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", (event) => {
        selectChange(event.target.value);
    })
});

function selectChange(type){
    if (type == "regularTimer") {
        regularTimerForm.style.display = "flex";
        exerciseTimerForm.style.display = "none";
        info.style.display = "none";
    } else if (type == "exerciseTimer") {
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
        info.style.display = "flex";
    }
}