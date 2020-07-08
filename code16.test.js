// import canMakeWord from './code16'
let canMakeWord = require('./code16')

describe("can Make Word function testing", () => {

  test('can_make_word("A")', ()=>{
    expect(canMakeWord("A")).toEqual(true)

  })

  test('can_make_word("BARK")', ()=>{
    expect(canMakeWord("BARK")).toEqual(true)

  })

  test('can_make_word("BOOK")', ()=>{
    expect(canMakeWord("BOOK")).toEqual(false)
  })


  test('can_make_word("TREAT")', ()=>{
    expect(canMakeWord("TREAT")).toEqual(true)
  })

  test('can_make_word("COMMON")', ()=>{
    expect(canMakeWord("COMMON")).toEqual(false)
  })

  test('can_make_word("SQUAD")', ()=>{
    expect(canMakeWord("SQUAD")).toEqual(true)
  })

  test('can_make_word("CONFUSE")', ()=>{
    expect(canMakeWord("CONFUSE")).toEqual(true)
  })

  test('can_make_word("BOUGHT")', ()=>{
    expect(canMakeWord("BOUGHT")).toEqual(false)
  })

})


