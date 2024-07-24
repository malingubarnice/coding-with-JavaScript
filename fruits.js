let fruit= ["🍎", "🍊", "🍎", "🍊", "🍎"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function puttingAppleOntoShelf(){
    for(let i=0 ; i< fruit.length; i+= 1){
        console.log(fruit[i])
        if(fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }else{
            orangeShelf.textContent += "🍊" +" " 
        }
    }
    
}
puttingAppleOntoShelf()