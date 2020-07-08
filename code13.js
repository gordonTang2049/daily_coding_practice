function makingNewJar(jars, turn){

    let result
    let i = 0
    let j = 2
          const newJar = (inputJars) =>{

                if(i === turn){
                    result = [...inputJars]
                }else{

                    let prevJarsStatus =    
                            inputJars   
                            .map((jar, index) => (index +1)% (j+i)===0 ? toggle(jar) : jar) 
                    i++
                    console.log(i)
                    newJar(prevJarsStatus)
                }
           
           }
    
    newJar(jars, turn)
        
    return result
}


function jarsInit(){
    let jars = []
    for(let i = 0; i <100; i++){
        jars.push(true)
    }
    return jars
}

function toggle(jar){
    if(jar){
        return false 
    }else{
      return true  
    }
}

let newJars = jarsInit()
let newJars1 = makingNewJar(newJars, 4)

console.log(newJars1)

