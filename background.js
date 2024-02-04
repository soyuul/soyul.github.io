// 배경화면 랜덤
const body = document.querySelector("body");
const images = ["todoListImg01.png", "todoListImg02.png", "todoListImg03.png", "todoListImg04.png", "todoListImg05.png", "todoListImg06.png", "todoListImg07.png"]
const bgImage = document.createElement("img");

const BGIMAGE_CLASS_NAME = "bg-image";
bgImage.classList.add(BGIMAGE_CLASS_NAME);

const randomImage = images[Math.floor(Math.random()*images.length)];

bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);