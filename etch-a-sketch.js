const gridCon = document.querySelector(".square-con");
const gridInfo = gridCon.getBoundingClientRect();
const resetBtn = document.querySelector("#reset-btn");
const log = document.querySelector("#log");
log.innerText = `hit "reset to start a new grid`;

resetBtn.addEventListener("click", () => {
    let size = prompt("How big would you like your grid? (max 100)");

     if (size !== null) {
        console.log(size);
        parseInt(size);
         if (size <= 100){
            console.log("im a correct number");
            log.innerText = (size + " x " + size);
            createGrid();
        } else {
            console.log(size);
            log.innerText = "Not a valid amount";
        }
     } else if (size === null) {
        log.innerText = "Nothing was entered.";
     }

})

for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("single-square");
    gridCon.appendChild(newDiv);
}

const singleSquares = document.querySelectorAll(".single-square");
singleSquares.forEach ( square => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("color-me");
    })
});

function createGrid () {

}