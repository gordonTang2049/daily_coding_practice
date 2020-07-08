const permutator = (inputArr) => {
        let result = [];
        
        const permute = (arr, m = []) => {
          
            if (arr.length === 0) {
    
            // This is end of recurstion, return  
            result.push(m)
    
          } else {
    
            for (let i = 0; i < arr.length; i++) {
              
              // Copy arr first time is copying [1,2,3]
              let copy = arr.slice();
    
              // console.log(`${arr} arr input `)
              
              let next = copy.splice(i, 1);
              
              // condition to trap permutes
              permute(copy, m.concat(next))
              
           }
         }
       }
    
       
       permute(inputArr)
      
       return result;
      }
    
    
    
    let arr = [1,2,3]
    
    
    let pre = permutator(arr)
    