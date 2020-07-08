import fs = require('fs');
import readline = require('readline')



function test(x: number, y: number): number {
    return x + y;
}

interface fileContentType {
    input : NodeJS.ReadableStream,
    output : string
    
}

const data = fs.readFileSync('./zigzag')


const dataString : string = data.toString().replace(/\n/g,'').replace(/ /g,'')




// make sure it slice in 4 piece 
// and random element follow the end 

function convert(str: string, num : number) : any{
    
    const numChar = Math.round(str.length / 4)
    const resultArr : string [][]  = []
    
    

    const strArr = str.split("")
    
    // string[][][][]
    for(let j =0; j < num; j++){
        
        const resultElement : Array<string> = []

            if(strArr.length >= numChar){

                for(let i = 0; i < numChar; i++){    
                    
                    resultElement.push(strArr[i]) 
                    strArr.shift()
                }
                resultElement.push('\n') 
            }else{

                for(let i = 0; i < strArr.length; i++){    

                    resultElement.push(strArr[i]) 
                    strArr.shift()
                }
                resultElement.push('\n') 
            }
            resultArr.push(resultElement)
            
        }

    return resultArr
    
}
console.log(convert(dataString, 5))
