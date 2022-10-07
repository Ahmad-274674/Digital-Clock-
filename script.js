const todayDate = document.getElementById('todayDate');

setInterval(() => {
    const date = new Date();
    const hours = document.getElementById('hours'),
        minuts = document.getElementById('minuts'),
        seconds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm');

    let h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    let am = h >= 12 ? "PM" : "AM";
    h = h > 12 ? h - 12 : h;

    hours.innerHTML = h;
    minuts.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    document.querySelectorAll('.day')[date.getDay()].classList.toggle('day-active');
    document.getElementById('todayDate').innerHTML = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
},1000)