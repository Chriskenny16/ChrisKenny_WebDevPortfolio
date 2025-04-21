"use strict";
const box = document.getElementById("the_box");
const myCircle = document.getElementById("the_circle");

const colors = ["red", "black", "yellow", "orange", "blue"];
let colorIndex = 0;

function cycleColors() {
   box.style.backgroundColor = colors[colorIndex];
   colorIndex = (colorIndex + 1) % colors.length;

}

box.addEventListener("click", cycleColors);

var button = document.createElement("button");
button.innerHTML = "Click to change where circle follows";
button.style.position = "fixed";
button.style.top = "20px";
button.style.left = "20px";
document.body.append(button);

var followingBox = false;

function moveCircle(event) {
   myCircle.style.left = event.clientX + "px";
   myCircle.style.top = event.clientY + "px";

}

function buttonClick() {
   if (followingBox == true) {
       box.removeEventListener("mousemove", moveCircle);
       document.addEventListener("mousemove", moveCircle);
       button.innerHTML = "Click to only follow in box";
       
       followingBox = false;
   } else {
       document.removeEventListener("mousemove", moveCircle);
       box.addEventListener("mousemove", moveCircle);
       button.innerHTML = "Click to follow everywhere";

       followingBox = true;
   }

}

box.addEventListener("click", cycleColors);
button.addEventListener("click", buttonClick);
document.addEventListener("mousemove", moveCircle);