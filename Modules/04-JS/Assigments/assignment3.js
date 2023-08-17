function factorial(n){
    let mult = 1
    let fact = 0
    for(let i = 2; i <= n; i++){
        mult = mult * (i) 
    }
    return mult
}

console.log(factorial(5))