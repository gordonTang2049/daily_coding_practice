// https://gist.github.com/kasun-maldeni/1a3a65b1a2c8019fb1a4cf367ada4870#file-sei_proximity_warmup-md



var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]


function lat(obj){
    return obj.location.lat
}

function long(obj){
    return obj.location.long
}



function distance(p, q){ 
var dx   = p.location.lat - q.location.lat;         
  var dy   = p.location.long - q.location.long;         
  Math.pow(dx, 2)
  var dist = Math.sqrt( dx*dx + dy*dy ); 
  return dist;
}


function sortNestedArray(a, b){
    
    if (a[1] < b[1]) {
        return -1;
    }

    if (b[1] < a[1]) {
        return 1;
    }
    
    return 0;
} 


function distanceOnResult(startLocation, ListOfLocation){
    let resultsOnDistance
    for(let i= 0; i  <  ListOfLocation.length; i++ ){
       resultsOnDistance =
                ListOfLocation
                    .map((place, index)=> { 
                        let calDistance = distance(startLocation, ListOfLocation[index])
                        return [place.name, calDistance]
                        })
                    .sort(sortNestedArray)
    }   

    let objDistance = Object.fromEntries(resultsOnDistance)
            
    return  {...Object.keys(objDistance)}
}


// function sortObjByValue(obj){
//     let keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
//}




let items = distanceOnResult(startPoint, results)


console.log(items)

  