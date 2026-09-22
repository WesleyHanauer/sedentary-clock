window.addEventListener('load', () => {
    document.getElementById("regularTimerForm").reset();
    document.getElementById("exerciseTimerForm").reset();
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