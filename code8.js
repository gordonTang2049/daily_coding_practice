
var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];


var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];


class TreasureMap{

    constructor(originalMap){
        this.originalMap = originalMap   
    }

    treasureFinder(map){
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[i].length; j++){
                if(map[i][j] === "X" ){
                        return [i, j]
                }
            }
        }
    }

    static buildMap(){
        let map = []
        
        for(let i =0;i < 5; i++ ){
             let row = ["A","A","A","A","A"]
                map.push(row)
        }

        return map
    }

    
    buildTresureMap(location){
        console.log(location[0])
        console.log(location[1])

        let map = TreasureMap.buildMap()
        map[location[0]].splice(location[1],1,"X")
        return map
    }




}

let mapping1 = new TreasureMap(map1)

// console.log(mapping1.originalMap)

let map1Location = mapping1.treasureFinder(mapping1.originalMap)




let mapping4 = new TreasureMap


let map4Location = mapping4.treasureFinder(map4)
console.log(mapping4.buildTresureMap(map4Location))       