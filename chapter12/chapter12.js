var trainSpeed = 250;
var trainPosition = 0;
var animation;
var train = document.getElementById("train");
train.addEventListener("click", speedUp);
var stopButton = document.getElementById("stopButton"); stopButton.addEventListener("click", stopTrain);
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);
    }
    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 900) {
        alert("CRASH!");
        consle.log("CRASH!");
        clearInterval(animation);
    }
    if (currentPosition > 900) {
         clearInterval(animation);
    }
}


function stopTrain() {
    if (trainPosition < 900) {
        clearInterval(animation);
    }
}