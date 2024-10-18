let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let pm = document.querySelector("#pm");
let switchComponent = document.getElementById("switch-component-on");

function showTime() {
    const myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    if(switchComponent.checked) {
        hours = hours % 12;
    } else {
        hours = hours;
    }

    
    hours = hours ? hours : 12; 

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;

    day.innerHTML = myDays[currentTime.getDay()];
    date.innerHTML = `${currentTime.getDate()} , ${myMonths[currentTime.getMonth()]} , ${currentTime.getFullYear()}`;

    pm.innerHTML = period;
}



setInterval(showTime, 1000);
