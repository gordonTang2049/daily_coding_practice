
const s1 = "xyaabbbccccdefww"
const s2 = "xxxxyyyyabklmopq"


function longest(str1, str2){
    const newStrArr = [...str1, ...str2]

    let newUniqStr = 
             newStrArr
            .sort()
            .filter((char, index) => newStrArr.indexOf(char) === index)
            .join('')

    
    return newUniqStr
}

console.log(longest(s1, s2))
