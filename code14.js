
function sortbyName(a,b){
    return a.suspectName > b.suspectName ? 1 : -1;
}


const fs = require('fs')

let dataCsv = fs.readFileSync('data.csv').toString().split("\n")

function createCriminalDataSet(suspectName, product, unitPrice, unit){
    
    let obj = Object.fromEntries([ ['suspectName', suspectName],['product', product],
                                   ['unitPrice', Number(unitPrice)],['unit', Number(unit)],   
                                   ['totalPrice', Number((unitPrice*unit).toFixed(2))]])
    return obj
}

function groupBySuspectName(acc, obj){
        
        let key = obj.suspectName

        if(!acc[key]){
            acc[key] = []
        }
        delete obj.suspectName
        acc[key].push(obj)

        return acc
}

const newArr =
        dataCsv
            .filter(record => dataCsv.indexOf(record) !== 0 )
            .map(record => record.split(','))
            .map(record => createCriminalDataSet(record[0],record[1],record[2],record[3]))
            .sort(sortbyName)
            .reduce((acc,obj) =>  { return groupBySuspectName(acc, obj) },{})
            

console.log(newArr)

