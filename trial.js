//let errorEl= document.getElementById("error")

//function myError(){
   // let myMessage= "Something went wrong, please try again!"
    //errorEl.textContent=myMessage
    //console.log(myMessage)
//}



//greetingEl= document.getElementById("greeting-el")

//let sentence = ["Hello ", "my ", "name ", "is ", "Barnice"]
//for(i=0; i< sentence.length ; i+=1){
    //greetingEl.textContent += sentence[i]
//}

let player1Time= 102
let player2Time = 107

function totalRaceTime(){
     return player1Time + player2Time
}


//let totalTimeTaken = totalRaceTime()

//console.log(totalTimeTaken)

//let randomNumber = Math.random() * 6

//console.log( randomNumber)

//let floorNumber = Math.floor(3.45632)

//console.log(floorNumber)

//let randomNumber = Math.random()*6

//console.log(randomNumber)
//let floorNumber = Math.floor(randomNumber)


//console.log(floorNumber)

let possibleDiceNumbers = Math.floor(Math.random()*5)+1
//console.log(possibleDiceNumbers)
function rollDice(){
    return possibleDiceNumbers
}
let answer= rollDice()
console.log(answer)


