// // Challange 1 DONE
// function reverse(string){
//     console.log("CHALLANGE 1")
//     let newString = ''

//     arr = string.split('')
//     for (i = arr.length - 1; i >= 0; i--){
//         newString += arr[i]
//     }
//     console.log(newString)
// }
// reverse('Greetings from The Hacker Collective')





// // Challange 2 DONE
// function reverse2(string){
//     console.log("CHALLANGE 2")
//     let newString = ''

//     arr = string.split('')
//     for (i = arr.length - 1; i >= 0; i--){
//         newString += arr[i]
//     }

//     if(newString === string){
//         outcome = true
//     }
//     else outcome = false
//     console.log(outcome)
// }
// reverse2('acca')





// Challange 3 DONE
// function reverseInt(int){
//     numStr = int.toString()
//     code = numStr.charCodeAt(0)

//     if(code === 45){
//         numArr = numStr.split("")
//         numArr.shift()
//         reversedArr = numArr.reverse()
//         addedArr = numArr.splice(0,0,"-")
//         reversedStr = reversedArr.join("")
//     }

//     else{
//         numArr = numStr.split("")
//         reversedArr = numArr.reverse()
//         reversedStr = reversedArr.join("")
//     }
//     return reversedStr
// }

// function checkForZero(x){
//     let xArr = []
//     if(x.charCodeAt(0) == 45){
//         xArr = x.split("")
//         xArr.splice(0,1)
//         for(i = 0; i < xArr.length; i++){
//             let checkCode = 0
//             checkCode = x.charCodeAt(1)
//             if(checkCode === 48){
//                 xArr.splice(0,1)
//             }
//         }
//         xArr.splice(0,0,"-")
//     }
//     else{
//         xArr = x.split('')
    
//         for(i = 0; i < x.length; i++){
//             let checkCode = 0
//             checkCode = x.charCodeAt(i)
//             if(checkCode === 48){
//                 xArr.splice(0,1)
//             }
//         }
        
//     }
//     return xArr.join('')
// }

// console.log(checkForZero(reverseInt(15)))
// // console.log(checkForZero(reverseInt(981)))
// // console.log(checkForZero(reverseInt(500)))
// // console.log(checkForZero(reverseInt(-15)))
// // console.log(checkForZero(reverseInt(-90)))





// // Challange 4 DONE
// function sumArr(arrNum){
//     console.log('CHALLANGE 4')
//     let total = 0
//     for(i = 0; i < arrNum.length; i++){
//         total += arrNum[i] 
//     }
//     console.log(total)
// }
// sumArr([1,2,3,4,5])
// // sumArr([1000,2000,44,55,22])
// // sumArr([123,456,789])





// // Challange 5 DONE
// function deafGrandma(sentence){
//     console.log('CHALLANGE 5')
//     let finalString = ''
//     arr = sentence.split(" ") 
//     arr.forEach(word => {
        
//         upperWord = word.toUpperCase()
//         newWord = upperWord + "!! "
//         newString = newWord.toString()

//         finalString += newString
//     })

//     console.log(finalString)
// }
// deafGrandma("i have a bad feelings about this")





// // Challange 6 DONE
// function missingLetter(str){
//     console.log('CHALLANGE 6')
//     converted = str.toLowerCase()
    
//     for(i = 0; i < str.length - 1; i++){

//         code1 = converted.charCodeAt(i)
//         code2 = converted.charCodeAt(i+1)
//         diff = code2 - code1

//         if(diff === 2){
//             missingCode = code1 + 1
//             letter = String.fromCharCode(missingCode)
//             return letter
//         }

//         else letter = undefined
//     }
//     return letter
// }
// // console.log("The missing letter is: " + missingLetter("abcdefghijklmnopqrstuvwxyz"))
// console.log("The missing letter is: " + missingLetter("abcdefghjklmno"))





// // Challange 7 DONE
// function swap(sentence,word1,word2){
//     arr = sentence.split(" ")
    
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] === word1){
//             word2Arr = word2.split("")
//             upperLetter = word2Arr[0].toUpperCase()
//             word2Arr.splice(0,1,upperLetter)
//             newWord2 = word2Arr.join("")

//             arr.splice(i,1,newWord2)
//         }
//     }
//     console.log(arr.join(" "))
// }

// // swap("His name is Tom", "Tom", "john")
// // swap("Let us get back to more Coding", "Coding", "algorithms")
// swap("This has a spellngi error", "spellngi", "spelling")