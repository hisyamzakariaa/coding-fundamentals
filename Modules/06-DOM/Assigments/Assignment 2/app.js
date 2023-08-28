const palette = document.querySelector(".palette")

document.addEventListener('keydown',(e)=>{
    let key = e.key
    console.log(key)

    if(e.altKey && (key === "k" || key === "K")){
        getPalette()
    }
})

function getPalette(){
    palette.classList.toggle('fade-out')
    palette.classList.toggle('fade-in')
}