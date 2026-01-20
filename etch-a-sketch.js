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
            let quotient = getQuotient(size);
            console.log(quotient);
            createGrid(quotient);
        } else {
            log.innerText = "Not a valid amount";
        }
     } else if (size === null) {
        log.innerText = "Nothing was entered.";
     }

})

//  //create 16x16 grid
// for (let i = 0; i < 16; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("single-square");
//     gridCon.appendChild(newDiv);
// }



function createGrid (amount) {
      console.log("im the amount " + amount);
    while (gridCon.hasChildNodes()) {
        gridCon.removeChild(gridCon.firstChild);
    }
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("single-square");
        newDiv.style.height = (amount - 2);
        newDiv.style.width = (amount - 2);
        gridCon.appendChild(newDiv);
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
//amount / i++
// if amount % i == 0
// amount == quotient 
// quotient == grid height & width