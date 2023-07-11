let myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";
function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}
document.querySelector("html").onclick = function() {};

document.body.onmousedown = function () {
    changeImage("無尾熊1");
}
document.body.onmouseup = function () {
    changeImage("哭哭熊");
}
let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("無尾熊1");
}
document.body.onmouseup = function () {
    changeImage("哭哭熊");
}