const gridCon = document.querySelector(".square-con");
const gridInfo = gridCon.getBoundingClientRect();
//make new div x amount of times
for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("single-square");
    // newDiv.style.minWidth = "230px";
    // newDiv.style.minHeight = "230px";
    gridCon.appendChild(newDiv);
}

