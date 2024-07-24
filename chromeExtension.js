
let myLeads= []

const inputEl = document.getElementById("input-el")

const inputBtnEl = document.getElementById("input-btn")

const buttonClickedEl = document.getElementById("button-clicked")

const ulEl= document.getElementById("ul-el")

inputBtnEl.addEventListener("click", function(){
    //buttonClickedEl.textContent = "Button clicked!"
    myLeads.push(inputEl.value)
    //console.log("Button clicked!")
    inputEl.value = ""
    
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for(let i=0; i<myLeads.length ; i+=1){
        console.log(myLeads[i])
        listItems += `
        <li>
           <a target = _blank href=' ${myLeads[i]}'>
           ${myLeads[i]}
           </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems




    
}

