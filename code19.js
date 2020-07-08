const seriesSum = (num) => {
    let numArr = []
    let baseNum = 4


    if(is_natural(num)){
        if(num > 1){
        
            num--
            for(let i = 0; i < num; i++){
                numArr.push(baseNum)
                baseNum = baseNum+3
            }
    
    
            const newNum = 
                    numArr
                        .map(num => Number((1/num).toFixed(2)) )
                        .reduce((acc, num)=> acc + num )
    
            return newNum + 1
    
        }else{
    
            return Number(1).toFixed(2)
        }       

    }else{
        return  `Your input must be natural number`
    }

}

function is_natural(s) {

    const number = Number(s)
    var n = parseInt(number, 10);
    
    return n >= 0 && n === number;
}

console.log(seriesSum(10))
