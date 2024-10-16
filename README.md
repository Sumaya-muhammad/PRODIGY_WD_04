# PRODIGY_WD_04
let timer;
let seconds = 0;

document.getElementById("start").onclick = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        seconds++;
        document.getElementById("display").innerHTML = formatTime(seconds);
    }, 1000);
};

document.getElementById("stop").onclick = function() {
    clearInterval(timer);
};

document.getElementById("reset").onclick = function() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("display").innerHTML = formatTime(seconds);
};

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return (hours < 10 ? "0" : "") + hours + ":" +
           (minutes < 10 ? "0" : "") + minutes + ":" +
           (secs < 10 ? "0" : "") + secs;
}
