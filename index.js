var l = document.querySelectorAll("button");
for(var i=0;i<l.length;i++) {
  l[i].addEventListener("click",function() {
    makeSound(this.textContent);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(curr) {
  var audio = null;
  switch(curr) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
  if(audio) {
    audio.play();
    buttonPressed(curr);
  }
}

function buttonPressed(curr) {
  console.log(curr);
  var x = document.querySelector("." + curr);
  x.classList.toggle("pressed");
  setTimeout(function () {
    x.classList.toggle("pressed");
  }, 100);
}

// // w key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'w') {
//     return;
//   }
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }, false);
//
// // a key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'a') {
//     return;
//   }
//   var audio = new Audio("sounds/tom-2.mp3");
//   audio.play();
// }, false);
//
// // s key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 's') {
//     return;
//   }
//   var audio = new Audio("sounds/tom-3.mp3");
//   audio.play();
// }, false);
//
// // d key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'd') {
//     return;
//   }
//   var audio = new Audio("sounds/tom-4.mp3");
//   audio.play();
// }, false);
//
// // j key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'j') {
//     return;
//   }
//   var audio = new Audio("sounds/snare.mp3");
//   audio.play();
// }, false);
//
// // k key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'k') {
//     return;
//   }
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }, false);
//
// // l key
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//
//   if (keyName !== 'l') {
//     return;
//   }
//   var audio = new Audio("sounds/kick-bass.mp3");
//   audio.play();
// }, false);
