function generation(x,y){
    let ancestor = ""
    if(y === "m"){
        switch(x){
            case -3: 
            ancestor = "Great Grandfather"
            break

            case -2:
            ancestor = "Grandfather"
            break

            case -1:
            ancestor = "Father"
            break

            case 0:
            ancestor = "Me"
            break

            case 1:
            ancestor = "Son"
            break

            case 2:
            ancestor = "Grandson"
            break

            case 3:
            ancestor = "Great Grandson"
            break         
        }
    }
        
    else if(y ==="f"){
        switch(x){
            case -3:
            ancestor = "Great Grandmother"
            break

            case -2:
            ancestor = "Grandmother"
            break

            case -1:
            ancestor = "Mother"
            break

            case 0:
            ancestor = "Me"
            break

            case 1:
            ancestor = "Daughter"
            break

            case 2:
            ancestor = "Granddaughter"
            break

            case 3:
            ancestor = "Great Granddaughter"
            break
        }
    }
    
    else{
        ancestor = "Invalid character"
    }
    return ancestor
}

console.log(generation(1,"f"))



