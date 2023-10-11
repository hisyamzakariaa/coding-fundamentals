const catsContainer = document.querySelector('.cats__container')
const BASEURL = "https://api.thecatapi.com/v1/breeds"

async function getData(){
    const response = await fetch(BASEURL)
    const data = await response.json()
    
    getDisplayData(data)
}

function getDisplayData(data){
    let catsContainer = document.querySelector(".cats-container")
    data.forEach(cat => {
        let singlecat = document.createElement("div")
        singlecat.innerHTML = `
            <div class="cat-container">
            <img src="https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg" onerror="this.onerror=null; this.src='./missingcat.avif'">
            <div class="cat-desc">
            <h3>${cat.name}</h3>
            <P>${cat.description}</p>
            </div>
            <a href="${cat.wikipedia_url}" target="_blank"><button>Profile</div><a>
            </button>
        `
        catsContainer.appendChild(singlecat)
    });
}
    
window.addEventListener('load', getData)