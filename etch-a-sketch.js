const gridCon = document.querySelector(".square-con");
const gridInfo = gridCon.getBoundingClientRect();
const resetBtn = document.querySelector("#reset-btn");
const log = document.querySelector("#log");
log.innerText = `hit "reset to start a new grid`;
let overallOpacity = 0;

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

            //reset opacity to 0 if no squares are colored
            let active = document.querySelectorAll("#active");
            if(active.length === 0 && overallOpacity > 0){
                    overallOpacity = 0;
                }
            square.style.backgroundColor = randomRgbColor();
            square.setAttribute("id", "active");

            //after delay reset square
            setTimeout(() => {
                square.setAttribute("id", "inactive");
                square.style.backgroundColor = "rgba(355,355,355,1)";
            }, 1000);
        })
    });
}

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    let a = round((overallOpacity += 0.1), 1).toFixed(1); 
    console.log(a);
    return "rgba(" + r + "," + g + "," + b +  "," + a + ")";
};

function round(value, precision) {
    if (value < 1){
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    } else{
        return 1;
    }
}