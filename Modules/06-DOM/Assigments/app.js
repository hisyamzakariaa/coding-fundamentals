const addButton = document.querySelector(".add__button")
const closeButton = document.querySelector(".cta__button")
const notification = document.querySelector(".notification")

addButton.addEventListener('click',getAddClass)
closeButton.addEventListener('click',getRemoveClass)

function getAddClass(){
    notification.classList.add("show")
}

function getRemoveClass(){
    notification.classList.remove("show")
}