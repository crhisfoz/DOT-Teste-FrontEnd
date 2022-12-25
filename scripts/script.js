const buttons = document.querySelectorAll("button")

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", (e) => {
        let text = document.getElementsByClassName("text-hidden");

        let button = document.getElementById("button")

        for (let j = 0; j < text.length; j++) {
            text[j].style.display = "none";
        }
        text[i].style.display = "block";
    })

}
