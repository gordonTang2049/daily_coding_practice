var arrNum = [4, 1, 16, 1, 10, 35, 22, 25];
var arrNum2 = [4, 1, 16, 1, 49, 49, 10, 35, 22, 25, 144];
function getSquare(arrN) {
    var isSqrt = function (num) {
        var sqrtNum = Math.sqrt(num);
        var result = (sqrtNum - Math.floor(sqrtNum)) === 0;
        return result;
    };
    var compareNumbers = function (a, b) {
        return a - b;
    };
    var resultNum = arrN
        .filter(function (num, index) { return arrN.indexOf(num) === index; })
        .filter(function (num) {
        return isSqrt(num) && num;
    })
        .sort(compareNumbers);
    return resultNum;
}
console.log('arrNum is ' + getSquare(arrNum));
console.log('arrNum2 is ' + getSquare(arrNum2));
