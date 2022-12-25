const colorsInterative = {
    yellow: "amarela !",
    red: "vermelha !",
    grey: "cinza !"
}


const buttonsInterative = document.querySelectorAll(".interactive-buttons-active")

let showText = document.querySelector(".interactive-text")

let backgroundCircle = document.getElementById("circle-colors-interactive")
console.log(backgroundCircle)

for (let i = 0; i < buttonsInterative.length; i++){

 
    buttonsInterative[i].addEventListener("click", (e)=>{

        if(buttonsInterative[i].id === "grey-button"){
            
            let showColor = document.querySelector("strong");
            showColor.innerHTML = colorsInterative.grey
            backgroundCircle.style.backgroundColor = "#808080;"
            document.getElementById("circle-colors-interactive").style.backgroundColor = "#808080"
  
        }else if(buttonsInterative[i].id === "yellow-button"){
            let showColor = document.querySelector("strong");
            showColor.innerHTML = colorsInterative.yellow;
            document.getElementById("circle-colors-interactive").style.backgroundColor = "#ffcc33"
        }else if (buttonsInterative[i].id === "red-button") {
            let showColor = document.querySelector("strong");
            showColor.innerHTML =  colorsInterative.red;
            document.getElementById("circle-colors-interactive").style.backgroundColor = "#ff0000"
          
        }
    
    })
    
}