function calculateAge(givenDate){
    let formattedGivenDate = givenDate.split("/")
    let currentDate = new Date()
    let year = currentDate.getFullYear()

    let age = 0

    age = year - formattedGivenDate[formattedGivenDate.length - 1]

    return age
}

console.log(calculateAge("31/05/1999") === 24)