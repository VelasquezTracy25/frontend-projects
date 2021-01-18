const birthday = '25 Mar 2021';

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = new Date(birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = (Math.floor(totalSeconds / 60) % 60);
    const seconds = (Math.floor(totalSeconds % 60));

console.log(days, hours, minutes, seconds);
}

//initial call
setInterval(countdown, 1000);


countdown();