let gridContainer = document.getElementById("gridContainer");
for (let i = 1; i<=240; i++) {
    let cell = document.createElement('div');
    cell.style.width = "30px";
    cell.style.height = "30px";
    cell.style.border = "1px solid #000000";
    gridContainer.appendChild(cell);
}

