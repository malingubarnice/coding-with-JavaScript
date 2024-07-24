
const containerEl= document.getElementById("container")
containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

const button = document.createElement("button", "onclick()")

button.textContent = "Buy!"

containerEl.append(button)


function buy(){
    containerEl.innerHTML += "<p>Thank you for buying!</p>"
}