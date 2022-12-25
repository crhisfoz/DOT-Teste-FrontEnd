const buttonsDropdown = document.querySelectorAll(".button-dropdown")

for (let i = 0; i < buttonsDropdown.length; i++) {

    buttonsDropdown[i].addEventListener("click", (e) => {
        let text = document.getElementsByClassName("text-hidden");
        for (let j = 0; j < text.length; j++) {
            text[j].style.display = "none";
            buttonsDropdown[j].parentElement.querySelectorAll("img")[0].src = "../assets/icons/icon-arrow-down.svg"
            buttonsDropdown[j].style.backgroundColor = " #fff"
        }
        text[i].style.display = "block";
        buttonsDropdown[i].parentNode.querySelectorAll("img")[0].src = "../assets/icons/icon-arrow-up.svg"
        buttonsDropdown[i].style.backgroundColor = " #7a2b58"
    })
}