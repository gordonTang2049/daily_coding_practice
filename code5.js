let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]


function iseven(num){
    return num % 2 === 0
}


function isodd(num){
    return num % 2 !== 0
}

function findOddNumInteger(inputArr){

        let uniqueNum = 
                inputArr
                .sort()
                .filter((num, index) => inputArr.indexOf(num) === index)
                .map((num) => ({[num] : (inputArr.filter(arrNum => arrNum === num).length) }),{})
                .filter(num => (isodd(Object.values(num)) ? num : '' ) )
                .map(objNum => Object.keys(objNum))
                .reduce((accumulator, currentValue) => {return accumulator.concat(currentValue)},[])
        return uniqueNum
}

let a = findOddNumInteger(arr)
console.log(a)
