

let player={
    name: "Barnice",
    chips: 170 
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum= firstCard + secondCard


let message=""
let hasBlackJack= false
let isAlive= false

let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl= document.getElementById("player-el")

playerEl.textContent = player.name +": $"+ player.chips 


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11
    }else if(randomNumber >= 11 && randomNumber <= 13){
        return 10
    }else{
        return randomNumber
    }
    
}

function startGame(){
    isAlive= true

    renderGame()
}

function renderGame(){
    if (sum<21){
        message="Would you like to draw another card?"
    }else if(sum===21){
        message="Wohoo! You have blackjack!"
        hasBlackJack=true
    }else{
        message="You are out of the game"
        isAlive=false
    }

    messageEl.textContent= message
    sumEl.textContent="Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }

    console.log(message)

}



function newCard(){

    if (hasBlackJack ===false && isAlive === true){
        let card= 5
        card=getRandomCard()
        sum += card
        cards.push(card)

        
    }
    
    renderGame()
}


