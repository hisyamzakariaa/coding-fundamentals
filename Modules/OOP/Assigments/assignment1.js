class Calculator{
    constructor(number){
        this.number = number
    }
    
    add(number){
        this.addNumber = number
        this.addresult = this.number + this.addNumber
    }

    subtract(number){
        this.subtractNumber = number
        this.subresult = this.number - this.subtractNumber
    }

    multiply(number){
        this.multiplyNumber = number
        this.mulresult = this.number * this.multiplyNumber
    }

    divide(number){
        this.divideNumber = number
        this.divresult = this.number / this.divideNumber
    }

    value(){
        if(this.addresult != undefined){
            console.log(`${this.number} + ${this.addNumber} = ${this.number + this.addNumber}`)
        }

        else if(this.subresult != undefined){
            console.log(`${this.number} - ${this.subtractNumber} = ${this.number - this.subtractNumber}`)
        }

        else if(this.mulresult != undefined){
            console.log(`${this.number} * ${this.multiplyNumber} = ${this.number * this.multiplyNumber}`)
        }

        else if(this.divresult != undefined){
            console.log(`${this.number} / ${this.divideNumber} = ${this.number / this.divideNumber}`)
        }
    }
}

const calculator = new Calculator(10)

// calculator.add(5)
calculator.subtract(5)
// calculator.multiply(5)
// calculator.divide(5)

calculator.value()
