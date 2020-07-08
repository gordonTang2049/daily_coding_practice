    
    class ConvertNum {

        static singleDigit = {
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six",
            7 : "seven",
            8 : "eight",
            9 : "nine"
        }

        static tenToTeens = {
                10 : "ten",
                11 : "eleven",
                12 : "tweleve",
                13 : "thirteen",
                14 : "forteen",
                15 : "fifteen",
                16 : "sixteen",
                17 : "seventeen",
                18 : "eighteen",
                19 : "ninteen"
        }

        

        static numTwentyToNinety = {
            2 : "twenty",
            3 : "thirty",
            4 : "forty",
            5 : "fifty",
            6 : "sixty",
            7 : "seventy",
            8 : "eighty",
            9 : "ninety"
        }        

        static destructureNumSet(num){
            let arrNum = num.toString()
                            .split("")
                            .map(Number)
            return arrNum
        }

        static isDoubleDigit(numArr){
            
            return numArr.length === 2

        }

        static isValidNum(num){
            
            return num > 100 || num < 0 

                    
        }

    }


    class Say extends ConvertNum{
        
        constructor(number){
            super()
            this.number = number

        }

        isEnglish(){
            let inputNum = this.number

            if (ConvertNum.isValidNum(inputNum)){
                return `Number must be between 0 and 99`
            }
            const arrNum = ConvertNum.destructureNumSet(inputNum)            
            
            if(ConvertNum.isDoubleDigit(arrNum)){
                  if(inputNum > 19 ){
                      
                    let firstDigit = ConvertNum.numTwentyToNinety[arrNum[0]]
                    let secondDigit = ConvertNum.singleDigit[arrNum[1]]

                    return `${firstDigit}-${secondDigit}`
                  }else{
                      return ConvertNum.tenToTeens[inputNum]
                  }
            }else{
                return ConvertNum.singleDigit[arrNum[0]]

            }
            
        }

    }


const num1 = new Say(88).isEnglish()
const num2 = new Say(99).isEnglish()
console.log(num1) 
console.log(num2) 