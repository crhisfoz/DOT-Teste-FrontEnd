const buttons = document.querySelectorAll("button")

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", (e) => {
        let text = document.getElementsByClassName("text-hidden");
        for (let j = 0; j < text.length; j++) {
            text[j].style.display = "none";
            buttons[j].parentElement.querySelectorAll("img")[0].src = "../assets/icons/icon-arrow-down.svg"

            console.log(buttons[i].parentNode.querySelectorAll("img")[0].src = "../assets/icons/icon-arrow-down.svg")
            buttons[j].style.backgroundColor = " #fff"
        }
        text[i].style.display = "block";
        buttons[i].parentNode.querySelectorAll("img")[0].src = "../assets/icons/icon-arrow-up.svg"
        buttons[i].style.backgroundColor = " #7a2b58"
    })
}