
let num1 =8
let num2 =2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let addEl= document.getElementById("sum-el")

function add(){
    let myAddition = num1 + num2
    addEl.textContent = "Sum :" +" " + myAddition
    console.log(myAddition)
}

function subtract(){
    let mySubtraction = num1 - num2
    addEl.textContent= "Sum :" +" " + mySubtraction
    console.log(mySubtraction)
}

function divide(){
    let myDivision = num1 / num2
    addEl.textContent= "Sum :" +" " + myDivision
    console.log(myDivision)
}

function multiply(){
    let myMultiplication = num1 * num2
    addEl.textContent= "Sum :" +" " + myMultiplication
    console.log(myMultiplication)
}




