function missingLetter(str){
    converted = str.toLowerCase()
    
    for(i = 0; i < str.length - 1; i++){

        code1 = converted.charCodeAt(i)
        code2 = converted.charCodeAt(i+1)
        diff = code2 - code1

        if(diff === 2){
            missingCode = code1 + 1
            letter = String.fromCharCode(missingCode)
            return letter
        }

        else letter = undefined
    }
    return letter
    
}
console.log("The missing letter is: " + missingLetter("stvwx"))