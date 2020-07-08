class Dice{
    constructor(){
        
    }

    roll(times){

        if(times !== undefined){
            let rolledResults = []

                for(let i = 0; i < times; i++){
                    rolledResults.push(Math.round(Math.random()* 6)) 
                }

            return rolledResults
        }
        
        return Math.round(Math.random()* 6)
    }
}

let test1 = new Dice() 

console.log(test1.roll(100))
    