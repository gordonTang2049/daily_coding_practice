


// See also: http://www.novaroma.org/via_romana/numbers.html



    
    let number = 3000
    

    function romanNumConverter(normalNumber){
        
        const romanNum = {
            1 : 'I',
            4 : 'IV',              
            5 : 'V',
            9 : 'IX',
            10 : 'X',
            40 : 'XL',                  
            50 : 'L',
            90 : 'XC',                     
            100 : 'C',
            400 : 'CD',
            500: 'D',
            900 : 'CM',
            1000: 'M' 
        }

        const romanNumKey = Object.keys(romanNum)
        const romanNumValue = Object.values(romanNum)
        
        let i = 12
        let displayRomanNum = []


            while(normalNumber > 0){

                let div = Math.floor(normalNumber / romanNumKey[i]) 
                normalNumber %= romanNumKey[i]

                    while(div--){
                        displayRomanNum.push(romanNumValue[i]) 
                    }

                i--
            }
        return displayRomanNum.join('')
    }

    console.log(romanNumConverter())
