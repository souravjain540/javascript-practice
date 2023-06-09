// array of three movies 

let moviesArray = ['abc','xyz','pqr']

// store first movie into a variable

let movieVar = moviesArray[0]

// store length of array into a variable

let length = moviesArray.length

// store the last element of array into a variable

let lastElement = moviesArray[length - 1]


// loop through array 

for(let i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i])
}

// create an array of numbers and add three to each and replace it with the new one


let numArray = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numArray.length; i++){
    numArray[i]+=3
}
console.log(numArray)

// find average of the numArray
let sum = 0
for (let i = 0; i < numArray.length; i++){
    sum+=numArray[i]
}
console.log(sum/numArray.length)