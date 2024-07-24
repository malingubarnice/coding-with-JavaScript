let person ={
    name: "Barnice",
    age: 19,
    country: "Kenya"
}

function logData(){
    return person.name + " " + "is " + person.age + " " + "years old and lives in " + person.country
}
logData()

console.log(logData())


let age= 75
let message= ""

if(age<6){
    message="is free"
}else if(age>=6 && age<=17){
    message="gets child discount"
}else if(age>= 18 && age<= 26){
    message="gets student discount"
}else if(age>= 27 && age<= 66){
    message= "pays full price"
}else{
    message="gets senior citizen discount"
}

console.log(message)


let largeCountries= ["China", "India", "U.S.A", "Indonesia", "Pakistan"]
console.log("The 5 largest countries in the world: ")

for(let i=0; i<largeCountries.length; i+=1){
    console.log(largeCountries[i])
    
}

let largeCountries2=["Tuvalu", "India", "U.S.A", "Indonesia", "Monaco"]
console.log(largeCountries2)
largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.shift()
largeCountries2.unshift("China")
console.log(largeCountries2)

let dayOfTheMonth = 13
let dayOfTheWeek = "Friday"

if(dayOfTheMonth === 13 && dayOfTheWeek === "Friday"){
    console.log("What!")
}

let hands = ["rock", "paper", "scissor"]

function playGame(){
    return hands[Math.floor(Math.random()*3)]
}

console.log(playGame())