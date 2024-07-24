
let boxClickedEl = document.getElementById("box-clicked")

let boxEl= document.getElementById("box")

boxEl.addEventListener("click", function(){
    boxClickedEl.textContent = "I want to open the box!"
    console.log("I want to open the box")

})

