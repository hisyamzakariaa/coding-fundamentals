const BASEURL = 'https://api.github.com/users/'
const button = document.querySelector('.button')
const form = document.querySelector('#form')
const image = document.querySelector('#pic')
const nameText = document.querySelector('#name')
const desc = document.querySelector('#desc')
const date = document.querySelector('#date')
const arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]

async function getData(inputValue){
    const response = await fetch(`${BASEURL}${inputValue}`)
    const data = await response.json()
    
    if(response != null){
        displayData(data)
    }
    else{
        alert("Invalid username")
    }
}

function displayData(data){
    image.src = data.avatar_url
    nameText.textContent = data.name
    desc.textContent = data.bio
    
    let createdDate = new Date(data.created_at)
    let day = createdDate.getDate()
    let month = arrMonth[createdDate.getMonth()]
    let year = createdDate.getFullYear()

    date.textContent = `Created at: ${day} ${month} ${year}`
}

button.addEventListener('click', async (e) => {
    const input = document.querySelector("#input")
    let inputValue = input.value
    getData(inputValue)
})
