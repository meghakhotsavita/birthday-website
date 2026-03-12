// =============================
// WAIT FOR PAGE LOAD
// =============================

document.addEventListener("DOMContentLoaded", function(){

// =============================
// PHOTO SLIDER
// =============================

let slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {

setInterval(function(){

slides[index].classList.remove("active");

index = (index + 1) % slides.length;

slides[index].classList.add("active");

},3000);

}

});


// =============================
// CAKE POPUP
// =============================

function showCake(){

let cake = document.getElementById("cakeBox");

if(cake){
cake.style.display = "block";
}

}

function closeCake(){

let cake = document.getElementById("cakeBox");

if(cake){
cake.style.display = "none";
}

}


// =============================
// GIFT BOX OPENING
// =============================

function openGift(){

let gift = document.querySelector(".gift-container");
let main = document.getElementById("mainPage");

if(gift && main){

gift.style.display = "none";
main.style.display = "block";

startConfetti();

}

}


// =============================
// CONFETTI ANIMATION
// =============================

function startConfetti(){

let canvas = document.getElementById("confetti");

if(!canvas) return;

let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<150;i++){

pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*6+4,
speed:Math.random()*3+2
});

}

function update(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of pieces){

ctx.fillStyle = "hsl("+Math.random()*360+",100%,50%)";

ctx.fillRect(p.x,p.y,p.size,p.size);

p.y += p.speed;

if(p.y > canvas.height){
p.y = 0;
}

}

requestAnimationFrame(update);

}

update();

}


// =============================
// LIGHTBOX IMAGE VIEWER
// =============================

function openImage(img){

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){

lightbox.style.display = "flex";
lightboxImg.src = img.src;

}

}

function closeImage(){

let lightbox = document.getElementById("lightbox");

if(lightbox){
lightbox.style.display = "none";
}

}
let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide(){

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

}

setInterval(nextSlide, 4000);


/* FULL SCREEN VIEW */

function openImage(img){

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

lightbox.style.display="flex";
lightboxImg.src = img.src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}
function cutCake(){

let knife = document.getElementById("knife");
let cake = document.getElementById("cake");
let candles = document.getElementById("candles");
let music = document.getElementById("bdayMusic");

knife.classList.add("cut");

setTimeout(function(){

cake.classList.add("cake-cut");
candles.classList.add("off");

if(music){
music.play();
}

startConfetti();

},600);

}
function openGift(){

let kitty = document.getElementById("kitty");

kitty.classList.add("show");

setTimeout(function(){

document.querySelector(".gift-container").style.display="none";
document.getElementById("mainPage").style.display="block";

},1500);

}