function tetra(n){
    totalSum = 0
    let sum = 0

    for(let i=1; i<=n; i++){ 
        sum = sum + i
        totalSum = totalSum + sum 
    }
    return totalSum
}

console.log(tetra(6))