/* function showTest() {
    const textValue = document.getElementById(idText)
    const button = document.getElementById("button-show")
    const containerButton = document.getElementById("container-button")
    const containerInfo = document.getElementById("container-info")

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

 */

function showTest(idBoxText, idButton, IdContainerButton) {

    let boxText;

    switch (idBoxText) {
        case "container-cards-left": 
        boxText = document.getElementById(idBoxText)
        break;
        
        case "container-cards-center": 
        boxText = document.getElementById(idBoxText)
        break;

            
        case "container-cards-right": 
        boxText = document.getElementById(idBoxText)
        break;
        default:
    };
    
    let button; 
    switch (idButton) {
        case "button-dropdown-left": 
        button = document.getElementById(idButton); 
        break;
        
        case "button-dropdown-center": 
        button = document.getElementById(idButton); 
        break;
  
        case "button-dropdown-right": 
        button = document.getElementById(idButton) ;

        break;
        default:
    };

    let containerButton;

    switch (IdContainerButton) {
        case "dropdown-container-button-left": 
        containerButton = document.getElementById(IdContainerButton); 
        break;
        
        case "dropdown-container-button-center": 
        containerButton = document.getElementById(IdContainerButton); 
        break;
  
        case "dropdown-container-button-right": 
        containerButton = document.getElementById(IdContainerButton) ;

        break;
        default:
    };


      const iconArrow = ["../assets/icons/icon-arrow-down.svg","../assets/icons/icon-arrow-up.svg"];

    boxText.style.display = "block"
    button.style.backgroundColor = " #7a2b58"
    button.firstElementChild.src = iconArrow[1];
    containerButton.style.backgroundColor =  "#ffcc33"
    
  }
 
   
