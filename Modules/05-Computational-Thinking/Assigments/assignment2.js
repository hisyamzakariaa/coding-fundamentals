function perimeter(letter,num){
    return (letter === "c") * num * 6.28 + (letter === "s") * num * 4
}

console.log(perimeter("c",9))