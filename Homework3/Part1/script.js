var seconds = document.getElementById('paragraph');
var setIntForStartStopwatch;
var setIntForStartTimer;
var setIntForContinue;
var count;
var continueFunc;
var timeInput = document.getElementById('addTime');
var pngTimer;
var picture;

function startStopwatch() {
    stopStopwatch();
    continueFunc = startStopwatch;
    setIntForStartStopwatch = setInterval(function(){
        seconds.innerHTML++;
        count = seconds.innerHTML;
        if (count == 30) stopStopwatch();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(setIntForStartStopwatch);
    clearInterval(setIntForStartTimer);
    clearInterval(setIntForContinue);
}

function resetStopwatch() {
    seconds.innerHTML = 30;
    timeInput.value = 30;
}

function addTime() {
    stopStopwatch();
    seconds.innerHTML = timeInput.value;
}

function startTimer() {
    stopStopwatch();
    continueFunc = startTimer;
    setIntForStartTimer = setInterval(function(){
        seconds.innerHTML--;
        count = seconds.innerHTML;
        if (count == 1) stopStopwatch();
    }, 1000);  
}

function continueStopwatch() {
    setIntForContinue = continueFunc();
}

function addPng() {
    pngTimer = document.getElementById('divForPng');
    pngTimer.innerHTML = '';
    pngTimer.insertAdjacentHTML('afterbegin', '<img>');
    picture = pngTimer.firstChild;
    picture.classList.add('showTimer');
    picture.setAttribute('src', 'stopwatch-timer.png');
}

function delPng() {
    pngTimer.innerHTML = '';
}