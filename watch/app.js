const display = document.querySelector(".clockDisplay");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "PM";

  if (hour === 12 && session == "AM") {
    hour = 0;
  }

  if (hour == 12 && session == "PM") {
    hour = 12;
  }

  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }

  if (second < 10) {
    second = "0" + second;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  display.innerHTML = hour + ":" + minute + ":" + second + ":" + session;
}

setInterval(showTime, 1000);
