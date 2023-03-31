// const click = document.getElementById("click")
const playingField = document.getElementById("playing-field")

playingField.addEventListener("mouseenter", function() {
    setTimeout(enlarge, 2500)
function enlarge() {
    clickBox.classList.remove("enlarge")
    clickBox.classList.add("enlarge")
}
    randomNum1 = Math.floor(Math.random() * (screen.width -600)+200)
    randomNum2 = Math.floor(Math.random() * (screen.height -600)+200)
    console.log("hejdå")
    playingField.innerHTML = `<button
    id="clickBox"
    style = 
    "position: absolute;
    left: ${randomNum1}px;
    top: ${randomNum2}px;
    width: auto;
    height: auto;
    border: 1px solid;
    ">
    <p>CLICK ME!!!</p>
</button>`
})


