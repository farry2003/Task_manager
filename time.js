let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
// let dateElement = document.getElementById("date");
let session = document.getElementById("session");
const option = { weekday: 'long' };



setInterval(() => {
    let currentTime = new Date();
    // let dateString = currentTime.toLocaleDateString(undefined, option);
    if (currentTime.getHours() > 12) {
        hrs.innerHTML = '0' + (currentTime.getHours() - 12);

    }
    else if (currentTime.getHours() < 10) {
        hrs.innerHTML = '0' + currentTime.getHours();
    }
    else {
        hrs.innerHTML = currentTime.getHours();
    }
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : " ") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : " ") + currentTime.getSeconds();
    // dateElement.innerHTML = dateString;
    if (currentTime.getHours() >= 12) {
        session.innerHTML = 'pm';
    } else {
        session.innerHTML = 'am';
    }
},1000);