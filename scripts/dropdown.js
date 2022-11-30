function showTest(idText, idButton) {
    const textValue = document.getElementById(idText)
    const button = document.getElementById("button-show")
    const containerButton = document.getElementById("container-button")
     const containerInfo =  document.getElementById("container-info")

    const imageValue = document.getElementById("button-image")
    console.log(imageValue)
    if (textValue.style.display === "none" || textValue.style.display === "") {
        textValue.style.display = "block";
        imageValue.src = "../../icons/icon-arrow-up.svg"
        button.style.display = "none"
        containerButton.style.height = "0"
        containerInfo.style.height = "16rem"

    } else {
        textValue.style.display = "none"
        imageValue.src = "../../icons/icon-arrow-down.svg"
        button.style.display = "block"
        containerButton.style.height = "3rem"
        containerInfo.style.height = "0"
  
    }
}

