const hours = document.querySelector('.hours');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const listMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const listDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
setInterval(() => {
    const Day = new Date();
    const getHour = `${Day.getHours()}`.padStart(2, '0');
    const getMinute = `${Day.getMinutes()}`.padStart(2, '0');
    const getSecond = `${Day.getSeconds()}`.padStart(2, '0');
    hours.innerText = getHour;
    minute.innerText = getMinute;
    second.innerText = getSecond;
    month.innerText = listMonth[Day.getMonth()];
    day.innerText = listDay[Day.getDay()];
    date.innerText = Day.getDate();
}, 500);
