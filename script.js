var toggle 
var mainWrapper 


function declare(){
     toggle = document.querySelector(".toggle-btn")
     mainWrapper = document.querySelector(".main-wrapper")
}
const Main = document.querySelector("main")

declare()

let dark = false

function Animation() {
    dark = !dark
    let clone = mainWrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light")
        clone.classList.add("dark")
    }
    else{
        clone.classList.remove("dark")
        clone.classList.add("light")
    }
    clone.classList.add("copy")
    Main.appendChild(clone)
   
    clone.addEventListener("animationend", () => {
        mainWrapper.remove()
        clone.classList.remove("copy")
        declare()
        events()

    })
  
}

function events(){
    toggle.addEventListener("click", Animation)
}

events()



