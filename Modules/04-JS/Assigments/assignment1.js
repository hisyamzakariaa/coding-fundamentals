function sum(numbersArray){
    let totalSum = 0
    for(let i = 0; i < numbersArray.length; i++){
        totalSum = totalSum + numbersArray[i]
    }
    return totalSum
}
console.log(sum([1,2,3,4]))