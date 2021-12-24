let gridContainer = document.getElementById("gridContainer");
let cellSize = document.querySelector("#select1");
id_number = '';
let cell = [];
size = cellSize.value;
gridLoop = (480/size)*(480/size) - 1 ;
gridContainer.style.setProperty('grid-template-columns', 'repeat(auto-fill, '+size+'px)');

//creates the grid
function drawGrid(loop) {
    for (let i = 0; i<=loop; i++) {
        cell[i] = document.createElement('div');
        cell[i].classList.add('square')
        cell[i].id = `cell${i}`;
        cell[i].style.border = "1px solid #ffffff";
        gridContainer.appendChild(cell[i]);
    }
    sketch();
}

function sketch(){
    let cells = document.querySelectorAll('.square');
    cells.forEach((square) => {
    square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black';
    });
});
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


drawGrid(gridLoop);

cellSize.addEventListener('change', () => {
    gridContainer.style.setProperty('grid-template-columns', 'repeat(auto-fill, '+cellSize.value+'px)');
    removeAllChildNodes(gridContainer);
    let loops = (480/cellSize.value)*(480/cellSize.value) - 1;
    drawGrid(loops);
});

//coloring the cells






//adjust grid size
//add eraser and pen tool
//add choose your color option
//clear option