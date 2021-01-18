//Countdown to this date
const birthday = '25 Mar 2021';

//Grab elements that will be changes
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

//Take current date and subtracts it from countdown date
function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = new Date(birthdayDate - currentDate) / 1000;

//Divides by seconds and splits according to days/hours/minutes/seconds
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = (Math.floor(totalSeconds / 60) % 60);
    const seconds = (Math.floor(totalSeconds % 60));

//Takes previous consts and inputs them into the appropriate HTML    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

//Formats hours/minutes/seconds to add a zero if less than 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call - starts timer
setInterval(countdown, 1000);

//Calls function
countdown();