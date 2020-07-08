var testarr = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function filterWithGeese(arr){
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

    let arrStr =
            arr
            .filter(arrNum => geese.indexOf(arrNum) < 0 )
            .sort()

    return arrStr
}



console.log(filterWithGeese(testarr))
