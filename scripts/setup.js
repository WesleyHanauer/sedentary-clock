window.addEventListener('load', () => {
    document.getElementById("timerForm").reset();
});

function selectChange(){
    location.reload();
}

const timerType = document.getElementById("timerOption").value;

if(timerType == "regularTimer"){
    
}else if(timerType == "exerciseTimer"){
    timerForm.style.display = "none";
}