{
    // const date = new Date();
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(date.toLocaleDateString('vi', options));
    // console.log(date.toLocaleTimeString('vi'));
    // console.log(date.toLocaleString('vi'));
}

const set_hour = document.querySelector('#set-hour');
const set_minute = document.querySelector('#set-minute');
const btn_timer = document.querySelector('.btn-timer');
const btn_module = document.querySelector('.timer');
const overlay_module = document.querySelector('.overlay');

for (let i = 23; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    set_hour.firstElementChild.insertAdjacentHTML('afterend', `<option>${i}</option>`);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    set_minute.firstElementChild.insertAdjacentHTML('afterend', `<option>${i}</option>`);
}
btn_module.addEventListener('click', () => {
    module.style.display = 'block';
});
overlay_module.addEventListener('click', () => {
    module.style.display = 'none';
});
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hours');
const module = document.querySelector('.module');
let idTimer;
btn_timer.addEventListener('click', timer);
let audio = new Audio('./src/nhacchuong.mp3');
function timer() {
    clearInterval(idTimer);
    module.style.display = 'none';
    let h = +set_hour.value;
    let m = +set_minute.value;
    let s = 0;
    idTimer = setInterval(() => {
        if (h == 0 && m == 0 && s == 0) {
            audio.play();
            clearInterval(idTimer);
        }
        if (s == 0) {
            if (m > -1) {
                m -= 1;
                s = 59;
            }
            if (m == -1) {
                if (h > 0) {
                    h -= 1;
                    m = 59;
                }
            }
        } else {
            --s;
        }
        if (m > -1) {
            second.innerText = s < 10 ? '0' + s : s;
            minute.innerText = m < 10 ? '0' + m : m;
            hour.innerText = h < 10 ? '0' + h : h;
        }
    }, 10);
}
