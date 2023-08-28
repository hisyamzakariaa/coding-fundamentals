let button = document.querySelector('.button')
let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

const BASEURL = "https://api.quotable.io/random"

async function getQuote(){
    const response = await fetch(BASEURL)
    const data = await response.json()

    quote.textContent = data.content
    author.textContent = data.author
}

button.addEventListener('click', getQuote)