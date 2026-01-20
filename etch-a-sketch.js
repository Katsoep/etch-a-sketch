const gridCon = document.querySelector(".square-con");
const gridInfo = gridCon.getBoundingClientRect();
const resetBtn = document.querySelector("#reset-btn");
const log = document.querySelector("#log");
log.innerText = `hit "reset to start a new grid`;

resetBtn.addEventListener("click", () => {
    let size = prompt("How big would you like your grid? (max 100)");

     if (size !== null) {
        parseInt(size);
         if (size <= 100){
            log.innerText = (size + " x " + size);
            // let quotient = getQuotient(size);
            // console.log(quotient);
            createGrid(+size);
        } else {
            log.innerText = "Not a valid amount";
        }
     } else if (size === null) {
        log.innerText = "Nothing was entered.";
     }

})

function createGrid (amount) {
      console.log("im the amount " + amount);
    while (gridCon.hasChildNodes()) {
        gridCon.removeChild(gridCon.firstChild);
    }

    for (let i = 0; i < amount; i++) {
    const subCon = document.createElement("div");
    subCon.classList.add("row-square");
    gridCon.appendChild(subCon);
        for (let i = 0; i < amount; i++){
            const square = document.createElement("div");
            square.classList.add("single-square");
            subCon.appendChild(square);
        }
    }
     //change color on hover
    const singleSquares = document.querySelectorAll(".single-square");
    singleSquares.forEach ( square => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("color-me");
        })
});
}

function getQuotient (promptNum) {
    for (let i = 1; i < promptNum; i++){
    if(promptNum % i === 0){
    let quotient = promptNum;
     console.log(quotient);
    return quotient;
    }  
    }
}
