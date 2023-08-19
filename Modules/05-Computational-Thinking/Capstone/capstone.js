function countingDays(date1, date2){
    time1 = date1.getTime()
    time2 = date2.getTime()

    diff = time2 - time1

    days = Math.floor(diff/86400000)
    return days
}

console.log(countingDays(
    new Date("January 1 2018"),
    new Date("January 1 2019")
))