// Array data transforming

const arrSheepOrWolf = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];


const warning = 
        arrSheepOrWolf
                    .map((position, i, positionArr) => { 
                            
                        return positionArr.slice(i,i+3)
                    })
                    .filter(arr => arr.length === 3)
                    .map(position =>{
                        
                         if(position[0] === 'sheep' && position[1] === 'wolf' && position[2] === 'sheep'){
                             return "Oi! Sheep number 1! You are about to be eaten by a wolf!"
                         }else if(position[0] === 'sheep' && position[1] === 'sheep' && position[2] === 'wolf'){
                            return "Pls go away and stop eating my sheep"
                         }

                        return ""
                    })

console.log(warning )


