const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let comingYear = new Date('1 1 2023');

function countDowning() {
    let now = new Date();
    let totalSeconds = (comingYear - now) / 1000; 
    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days.toString().padStart(2,'0');
    hoursEl.innerHTML = hours.toString().padStart(2,'0');
    minutesEl.innerHTML = minutes.toString().padStart(2,'0');
    secondsEl.innerHTML = seconds.toString().padStart(2,'0');
    
}


setInterval(countDowning, 1000);

