function randomNumber() {
    // Random between 0 and 6
    return Math.floor(Math.random() * 6) + 1;
}
function setText(text) {
    document.querySelector(".container>h1").innerHTML = text;
}


var rand1 = randomNumber();
var rand2 = randomNumber();


document.querySelector(".img1").setAttribute("src", `./images/dice${rand1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${rand2}.png`);



if (rand1 > rand2) {
    // player 1 wins
    setText("Player 1 Wins");

} else if (rand2 > rand1) {
    // player 2 wins
    setText("Player 2 Wins");

} else {
    // draw
    setText("Draw");

}