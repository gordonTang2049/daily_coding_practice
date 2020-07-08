
var nestedArr = [[1,3,4,6], [2,3,4,7], [3,4,7,8,9]]

function commonOnArray(nestedArrs){
    let flattenArr = 
        nestedArrs
            .reduce(
            function(accumulator, currentValue) {
            return accumulator.concat(currentValue)
            },
            []
            )
            .sort()

    let arr = 
        flattenArr
            .filter((num, index) => flattenArr.includes(num, index+nestedArrs.length-1))
            
    return arr
}

console.log(commonOnArray(nestedArr))
