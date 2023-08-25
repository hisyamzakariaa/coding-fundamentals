const registerButton = document.querySelector(".register-button")
const closeButton = document.querySelector(".close-button")
const panelContainer = document.querySelector(".slide-over-container")
const wrapper = document.querySelector(".wrapper")
const backdrop = document.querySelector(".bg-backdrop")

registerButton.addEventListener('click',()=>{
    toggleClass()
    getBackground()
})
closeButton.addEventListener('click',()=>{
    toggleClass()
    getBackgroundRemoved()
})

function toggleClass(){
    if(panelContainer.classList.length <= 1){
        panelContainer.classList.toggle("slide-out")
    }
    else{
        panelContainer.classList.toggle("slide-out")
        panelContainer.classList.toggle("slide-in")
    }
}

function getBackground(){
    wrapper.insertBefore(backdrop,panelContainer)
}

function getBackgroundRemoved(){
    wrapper.removeChild(backdrop)
}

toggleClass()
getBackgroundRemoved()