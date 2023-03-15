const hours = document.querySelector('.hours');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
let value_hour;
let value_minute;
let audio = new Audio('./src/nhacchuong.mp3');
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
const btn_timer = document.querySelector('.btn-timer');
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
    if (getHour == value_hour && value_minute == getMinute) {
        audio.play();
        btn_timer.classList.remove('btn-timer-disable');
    } else {
    }
}, 500);

const countDown = document.querySelector('.nav-link');
const module = document.querySelector('.module');
const overlay = document.querySelector('.overlay');
countDown.addEventListener('click', () => {
    module.style.display = 'flex';
});
overlay.addEventListener('click', (e) => {
    module.style.display = 'none';
});
const set_hour = document.getElementById('set-hour');
const set_minute = document.getElementById('set-minute');
btn_timer.addEventListener('click', () => {
    value_hour = set_hour.value;
    value_minute = set_minute.value;
    if (value_hour == 'Hour' && value_minute == 'Minute') {
        module.style.display = 'none';
        alert('Bạn chưa hẹn giờ');
        return;
    }
    set_hour.value = 'Hour';
    set_minute.value = 'Minute';
    module.style.display = 'none';
    btn_timer.classList.add('btn-timer-disable');
});

for (let i = 23; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option  value="${i}">${i}</option>`;
    set_hour.firstElementChild.insertAdjacentHTML('afterend', option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option  value="${i}">${i}</option>`;
    set_minute.firstElementChild.insertAdjacentHTML('afterend', option);
}
