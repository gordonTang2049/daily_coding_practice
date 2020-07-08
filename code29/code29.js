"use strict";
exports.__esModule = true;
var fs = require("fs");
function test(x, y) {
    return x + y;
}
var data = fs.readFileSync('./zigzag');
var dataString = data.toString().replace(/\n/g, '').replace(/ /g, '');
// make sure it slice in 4 piece 
// and random element follow the end 
function convert(str, num) {
    var numChar = Math.round(str.length / 4);
    var resultArr = [];
    var strArr = str.split("");
    // string[][][][]
    for (var j = 0; j < num; j++) {
        var resultElement = [];
        if (strArr.length >= numChar) {
            for (var i = 0; i < numChar; i++) {
                resultElement.push(strArr[i]);
                strArr.shift();
            }
            resultElement.push('\n');
        }
        else {
            for (var i = 0; i < strArr.length; i++) {
                resultElement.push(strArr[i]);
                strArr.shift();
            }
            resultElement.push('\n');
        }
        resultArr.push(resultElement);
    }
    return resultArr;
}
console.log(convert(dataString, 5));
