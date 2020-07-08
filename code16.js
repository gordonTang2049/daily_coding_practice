
//  [n, a] ->  assume you make a word name
//  [a, n] ->  if I used 'A',
//  I should use 'N' in the next card, rather Jam together

// strategy
function canMakeWord(word){

      const letter_blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],        
        ['C','P'],
        ['N','A'], 
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
      ]

      const chars = [...word]
      const numOfChar = chars.length
      

      for(let i = 0; i < numOfChar; i++ ){
        
        letter_blocks.forEach((block) => {
          
          if(block.includes(chars[0]) && !block.includes(true) ){

              chars.shift()
              block.push(true)

          }
            
        })

      }

      const checkWord = (blocks) => {
        let validatedLetter = 0
        blocks.forEach(block => block.includes(true) ? validatedLetter++ : "" )
        return validatedLetter
      }
      

return numOfChar === checkWord(letter_blocks)
}


console.log(canMakeWord("SQUAD"))

module.exports = canMakeWord



