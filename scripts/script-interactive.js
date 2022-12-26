const colorsInterativeNames = {
    yellow: "amarela !",
    red: "vermelha !",
    grey: "cinza !"
}

const rgbColorsInterative = {
    grey: "#808080",
    yellow: "#ffcc33",
    red: "#ff0000"
}

const buttonsInteractive = document.querySelectorAll(".interactive-buttons-active")

let showText = document.querySelector(".interactive-text")

let backgroundCircle = document.getElementById("circle-colors-interactive")

for (let i = 0; i < buttonsInteractive.length; i++) {

    buttonsInteractive[i].addEventListener("click", (e) => {

        if (buttonsInteractive[i].id === "grey-button") {
            let showColor = document.querySelector("strong");
            showColor.innerHTML = colorsInterativeNames.grey
            document.getElementById("circle-colors-interactive").style.backgroundColor = rgbColorsInterative.grey
        } else if (buttonsInteractive[i].id === "yellow-button") {
            let showColor = document.querySelector("strong");
            showColor.innerHTML = colorsInterativeNames.yellow;
            document.getElementById("circle-colors-interactive").style.backgroundColor = rgbColorsInterative.yellow
        } else if (buttonsInteractive[i].id === "red-button") {
            let showColor = document.querySelector("strong");
            showColor.innerHTML = colorsInterativeNames.red;
            document.getElementById("circle-colors-interactive").style.backgroundColor = rgbColorsInterative.red
        }
    })

}