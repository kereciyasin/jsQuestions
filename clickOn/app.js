const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.body; 

const colorsArray = ["red", "green", "yellow", "pink", "purple"];

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colorsArray.length);
  console.log(randomNumber);
  body.style.backgroundColor = colorsArray[randomNumber];
  color.innerHTML=colorsArray[randomNumber]
});

