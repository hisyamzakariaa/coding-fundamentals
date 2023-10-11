const ENDPOINT = 'https://gist.githubusercontent.com/hisyamzakariaa/6cd4c9e11fc80760c4fec7852bf5a2f5/raw/b1cf4c4f127fa52b052df6e382a8cbc8af9e8a5c/me.json'
const container = document.querySelector('.container')

async function getData(){
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    displayData(data)
}

function displayData(data){
    let nameText = document.createElement("h1")
    nameText.textContent = data.name
    container.appendChild(nameText)

    let ageText = document.createElement("p")
    ageText.textContent = data.age
    container.appendChild(ageText)

    let hobbiesList = document.createElement("ul")
    let arrHobbies = data.hobbies
    arrHobbies.forEach(hobby => {
        singleHobby = document.createElement("li")
        singleHobby.textContent = hobby
        hobbiesList.appendChild(singleHobby)
    });
    container.appendChild(hobbiesList)
}