var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

css.textContent = getComputedStyle(body).background;
color1.value = "#FF0000";
color2.value = "#FFFF00";

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    var c = "";

    while (c.length < 6) {
        c += (Math.random().toString(16).substr(-6).substr(-1));
    }
    return "#" + c;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click", function() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
})
