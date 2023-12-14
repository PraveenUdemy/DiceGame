var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector("img").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Won";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Won";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}