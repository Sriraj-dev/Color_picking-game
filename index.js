let boxes = document.querySelectorAll(".box");
let s = document.querySelector("#rgb");
let boxCount = 3;
let colors = generateRandomColors(boxCount);
let pickedColor = colors[Math.floor(Math.random() * boxCount)];
s.textContent = pickedColor;
let playBtn = document.querySelector("#playAgain");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let statusText = document.querySelector(".status");

statusText.textContent = "Let's Play!!";

easyBtn.addEventListener("click", function () {
  document.querySelector("h1").style.backgroundColor = "rgb(242, 175, 41)";
  statusText.textContent = "Let's Play!!";
  boxCount = 3;
  this.style.background = "rgb(242, 175, 41)";
  this.style.color = "white";
  hardBtn.style.background = "white";
  hardBtn.style.color = "rgb(242, 175, 41)";
  colors = generateRandomColors(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  s.textContent = pickedColor;
  for (let i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  document.querySelector("h1").style.backgroundColor = "rgb(242, 175, 41)";
  statusText.textContent = "Let's Play!!";
  boxCount = 6;
  this.style.background = "rgb(242, 175, 41)";
  this.style.color = "white";
  easyBtn.style.background = "white";
  easyBtn.style.color = "rgb(242, 175, 41)";
  colors = generateRandomColors(boxCount);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  s.textContent = pickedColor;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].style.display = "block";
  }
});

playBtn.addEventListener("click", function () {
  document.querySelector("h1").style.backgroundColor = "rgb(242, 175, 41)";
  statusText.textContent = "Let's Play!!";
  colors = generateRandomColors(boxCount);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  s.textContent = pickedColor;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
  }
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor == pickedColor) win();
    else lose(this);
  });
  if (colors[i]) {
    boxes[i].style.background = colors[i];
  } else boxes[i].style.display = "none";
}

function win() {
  for (let i = 0; i < colors.length; i++) {
    boxes[i].style.background = pickedColor;
    boxes[i].style.borderColor = "black";
  }
  statusText.textContent = "Correct!!!!";
  document.querySelector("h1").style.background = pickedColor;
}

function lose(e) {
  e.style.background = "aquamarine";
  e.style.borderColor = "aquamarine";
  // e.classList.add("lose");
  statusText.textContent = "Try Again!!";
}

function generateRandomColors(length) {
  let ar = [];
  for (let i = 0; i < length; i++) ar.push(randomColor());
  return ar;
}

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return "rgb(" + x + ", " + y + ", " + z + ")";
}
