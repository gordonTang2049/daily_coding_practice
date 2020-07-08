


// encrypt("This is a test!", 1) -> "hsi  etTi sats!"


function isEven(indexOfChar){
    return indexOfChar % 2 === 0
}

let testsen = `This is a test!`
let sen = [...testsen]

function encrypt(sentence, numOfTimes = 1){
    let sentenceSplit = [...sentence]

try{
    
    for(let i = 0; i < numOfTimes;i++ ){

    let evenIndexSentence =
            sentenceSplit
                    .filter((char, i) =>{if(isEven(i)){return char}  })

                // every second 
    let oddIndexSentence = 
            sentenceSplit
                    .filter((char, i) =>{if(!isEven(i)){return char}  })

        sentenceSplit = [...oddIndexSentence, ...evenIndexSentence]
    }
}catch(e){

    return e
}
    // [...oddIndexSentence, ...evenIndexSentence].join("")
    return sentenceSplit.join("")


}

console.log(encrypt(sen, ))