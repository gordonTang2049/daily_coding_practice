const arrNum : Array<number> = [4, 1,16, 1, 10, 35, 22, 25]
const arrNum2 : Array<number> = [4, 1,16, 1, 49,49, 10, 35, 22, 25, 144]



function getSquare(arrN : Array<number>) : Array<number>{

    const isSqrt = ( num : number) : boolean => {

        const sqrtNum = Math.sqrt(num)
        const result = (sqrtNum - Math.floor(sqrtNum)) === 0; 
        return result

    } 

    const compareNumbers = (a : number, b : number) : number => {
        return a - b;
    }
  
    const resultNum =
            arrN
                .filter((num, index) => arrN.indexOf(num) === index)
                .filter((num)=>{
                    return isSqrt(num) && num
                })
                .sort(compareNumbers)    

    return resultNum
}

console.log('arrNum is '+ getSquare(arrNum))

console.log('arrNum2 is ' + getSquare(arrNum2))




