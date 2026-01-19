const gridCon = document.querySelector(".square-con");
const gridInfo = gridCon.getBoundingClientRect();

for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("single-square");
    gridCon.appendChild(newDiv);
}

const singleSquares = document.querySelectorAll(".single-square");
singleSquares.forEach ( square => {
    square.addEventListener("mouseenter", () => {
        console.log("Yes");
        square.classList.add("color-me");
    })
});
