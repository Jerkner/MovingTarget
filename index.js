// const click = document.getElementById("click")
const playingField = document.getElementById("playing-field")

playingField.addEventListener("mouseenter", function() {
    randomNum1 = Math.floor(Math.random() * 1175 + 25)
    randomNum2 = Math.floor(Math.random() * 575 + 25)
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