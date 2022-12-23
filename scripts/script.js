const colors = {
    purple: "#7a2b58",
    yellow: "#ffcc33",
    white: "#ffffff"
}


let card = document.querySelector('.container-cards')
console.log(card)

let divCard = document.querySelector(".dropdown-container-button")

let button = document.querySelector(".dropdown-icon-arrow")

let containerText = document.querySelector(".container-cards-text")

let containerValues = {
    display: "none",
    backgroundButton: colors.purple
};

function handleValues() {
    containerText.style.display = containerValues.display;
    button.style.backgroundColor = containerValues.backgroundButton
}
 handleValues()

function clickButton() {

    if (containerValues.display = "none") {
        containerValues.display = "block"
    } else{
        containerValues.display = "none"
    }
    handleValues()
}
button.addEventListener("click", clickButton)