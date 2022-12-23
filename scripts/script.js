const colors = {
    purple: "#7a2b58",
    yellow: "#ffcc33",
    white: "#ffffff"
}


let card = document.querySelector('.container-cards')

let divCard = document.querySelector(".dropdown-container-button")

let button = document.querySelector(".dropdown-icon-arrow")

let containerText = document.querySelector(".container-cards-text")

let backgroundImageButton = document.querySelector("#image-card-left")


let containerValues = {
    display: "none",
    backgroundButton: colors.purple,
    backgroundImageButton: ""
};

function handleValues() {

    containerText.style.display = containerValues.display;
    button.style.backgroundColor = containerValues.backgroundButton;
    button.style.src = containerValues.backgroundImageButton    
}

function clickButton() {

    if (containerValues.display = "none") {
        containerValues.display = "block";
     document.getElementById("image-card-left").src = "../assets/icons/icon-arrow-up.svg" 
     divCard.style.backgroundColor = colors.yellow
        
    } else{
        containerValues.display = "none"
    }
    handleValues()
}
button.addEventListener("click", clickButton)