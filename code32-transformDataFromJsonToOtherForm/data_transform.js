const fs = require('fs')

let geoData = fs
              .readFileSync('data.json')
              .toString()
              .replace(/'/g, "\"")

let geoDataJson = JSON.parse(geoData)

let geoDataJsonValue = Object.values(geoDataJson)

const transformedGeoData =
                geoDataJsonValue
                .map(record => createGeoDataRecord(record[2], record[0], record[1]))

function createGeoDataRecord(country, lat, lng){

            let geoLocationData = Object.fromEntries([ 
                                        ['lat', lat],
                                        ['lng', lng],
                                        ])
            let geoDataRecord = Object.fromEntries([ 
                                        [country, geoLocationData]
                                       
                ])
                                        
            return geoDataRecord
}

console.log(transformedGeoData)
