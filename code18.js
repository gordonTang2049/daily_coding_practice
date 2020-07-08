const fs = require('fs')

// Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
//     return Array.from(Array(ceil(this.length/n)), 
//     (_,i)=>this.slice(i*n,i*n+n));
// }});

// .split("\n").toString()

Array.prototype.chunk = function ( n ) {
    if ( !this.length ) {
        return [];
    }
    // 
    return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

let cardSet = fs.readFileSync('cardSet.txt').toString()

const cardSetArr = cardSet
                    .split("|")
                    .map(item => item.trim())
                    .filter(item => "" || !/\W/g.test(item) ? item : "")
                    .filter((item, i, arr) => arr.indexOf(item) > 1 )
                    .reduce((acc, val, i, arr) =>{ return pairArr(acc, i, arr)   }, [])
                    .map(arrItem => cardSetObj(arrItem)  )
                    .reverse()
                    .chunk(3)
                    
                    
function cardSetObj(arr){

    const obj = Object.fromEntries([arr])
    return obj

}

function pairArr(result, index, array){
    if (index % 2 === 0){
        const newArr = array.slice(index, index + 2)
        result.push(newArr);
    }
    return result;
}

function flatten(acc, val){
    return acc.concat(val)
}


const alfredPile = (arr) => {
         [a,b,c,d] = arr
         return [a, c]
}
    

const peterPile = (arr) => {
    
    [a, b, c, d] = arr
    return [b, d]
    
}
console.log(alfredPile(cardSetArr))
console.log(peterPile(cardSetArr))
 
console.log(`Alfred Pile is ${alfredPile(cardSetArr)}`)

console.log(`Peter's Pile is ${peterPile(cardSetArr)}`)