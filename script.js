//int generator for rgb codes
function randInt() {
    return Math.floor(Math.random()*256);
}

let gridContainer = document.getElementById("gridContainer");
let cellSize = document.querySelector("#select1");
let clear = document.getElementById("clear");
let toolType = document.querySelector("#select2");
let isDraw = true;
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

function toolChange(){
    toolType.addEventListener('change', () => {
        if (toolType.value == '1') {
            isDraw = true;
        }
        if (toolType.value == '0'){
            isDraw = false;
        }
        if (toolType.value == '2') {
            isDraw = 'multi';
        }
    });
}

function sketch(){
    toolChange()
    let cells = document.querySelectorAll('.square');
    cells.forEach((square) => {
    square.addEventListener('mouseover', ()=>{
            if (isDraw == true) {
                square.style.backgroundColor = 'black';
            }
            if (isDraw == false) {
                square.style.backgroundColor = 'rgb(175, 213, 247)';
            }
            if (isDraw == 'multi') {
                square.style.backgroundColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
            }
    });
});
    clear.addEventListener('click', () => {cells.forEach((square) => {
        square.style.backgroundColor = 'rgb(175, 213, 247)';
    })
});
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

cellSize.addEventListener('change', () => {
    gridContainer.style.setProperty('grid-template-columns', 'repeat(auto-fill, '+cellSize.value+'px)');
    removeAllChildNodes(gridContainer);
    let loops = (480/cellSize.value)*(480/cellSize.value) - 1;
    drawGrid(loops);
});


//Rainbow colors
