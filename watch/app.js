const display = document.querySelector(".clockDisplay");

let date = new Date();
console.log(date);
let hour = date.getHours();
let minute = date.getHours();
let second = date.getHours();
let session = "AM";

display.innerHTML = hour + ":" + minute + ":" + second + ":" + session;
