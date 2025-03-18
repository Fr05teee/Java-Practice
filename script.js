console.log("hello world");
console.error("this is an error sus");

let cars =["Nissan", "Volvo", "BMW"]

let cars_details = {
    "Nissan": {
        "color": "Silver",
        "year": 2016
    },
    "Volvo": {
        "color": "Orange",
        "year": 2017
    },
    "BMW": {
        "color": "Purple",
        "year": 2022
    }
}

console.log(cars.length)

let Blank = cars_details.Volvo.color
let Blank2 = cars_details.BMW.year - cars_details.Nissan.year
let Blank3 = cars_details.Volvo.color + ", " +cars_details.Nissan.color + ", " +cars_details.BMW.color
let notOrange = 0

for (let counter=0; counter < cars.length; counter++){
    if (cars_details[cars[counter]].color !== "Orange"){
        notOrange +=1
    }

}//end for

console.log(`Volvo is the color ${Blank}`)
console.log(`The BMW is ${Blank2} years older than the Nissan`)
console.log(`The cars are ${Blank3} colors`)
console.log(`There are ${notOrange} cars not the color orange`)

//DATE EXAMPLE

let date = new Date()
let timeHours =24 -date.getHours()
let timeMin = 59 - date.getMinutes()
let timeSec = 59 - date.getSeconds()

console.log(Date())
console.log(`Midnight will be in `+ timeHours +` hours,` + timeMin + ` minues and ` + timeSec +` seconds`)