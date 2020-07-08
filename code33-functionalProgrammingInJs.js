var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
  ];


  var ears =
        users
        .filter (user => user.username === "Ear")

var elders =
        users
        .filter (user => user.age >= 60 )

var allId = 
        users 
        .map (user => user.id )

        
var totalAge = 
        users
         .map(user => user.age)
         .reduce((total, age) => total + age)
                
var avgAge = totalAge / users.lengthvar 
//       printf(avgAge)    

var sortByUser =
        users 
         .map(user => user.username)
         .sort((a,b) => a.localeCompare(b) ) 

        // printf(sortByUser)
var arr = []

var words = [
        "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "I see no X here", "I am a developer"
      ];
  
var upperCaseAllwordsExclFirst =
                  words
                   .map(word => word.toUpperCase())               
                   .forEach( (word) => {
                        arr = [...word] 
                        let firstLetter = arr[0].toString().toLowerCase()
                        arr = arr.slice(1, arr.length)
                        arr.splice(0,0,firstLetter)
                        // printf(arr.join(""))
                   })

var arr1 = []

var moreWords =
              words
                .filter(word => word.length > 5 )
                .map(word => word.length)

var capWords =
                words
                .filter(word => word.length > 5 )
                .forEach( (word) => {
                        arr1 = [...word] 
                        let firstLetter = arr1[0].toString().toUpperCase()
                        arr1 = arr1.slice(1, arr1.length)
                        arr1.splice(0,0,firstLetter)
                         printf(arr1.join(""))
                        })
                

                //    .map(user => user.username.toLowerCase())

                //    .map(user => user.username[0].toLowerCase())

                //    .map(user => user.username.charAt(0).toLowerCase()) .charAt(0).
                
                
                
                
                
        // printf(upperCaseAllwordsExclFirst)

// function(a,b){
//         return 

// }
// cities.sort(function(a, b) {
//         return a.slug[0].localeCompare(b.slug[0]);
// });

function printf(item){
        console.log(item)
}

