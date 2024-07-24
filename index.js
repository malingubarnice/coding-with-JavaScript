let count = 0

let countEl= document.getElementById("count-el")
function increment(){
    count = count + 1
    countEl.textContent=count
    
}

let saveEl= document.getElementById("save-el")

function save(){
    let previous = count + " - "
    saveEl.textContent += previous
    console.log(count)
    countEl.textContent=0
    count=0
    
}


