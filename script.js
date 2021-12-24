let gridContainer = document.getElementById("gridContainer");
id_number = '';
let cell = [];

for (let i = 0; i<=239; i++) {
    cell[i] = document.createElement('div');
    cell[i].classList.add('square')
    cell[i].id = `cell${i}`;
    cell[i].style.width = "30px";
    cell[i].style.height = "30px";
    cell[i].style.border = "1px solid #ffffff";
    gridContainer.appendChild(cell[i]);
}

const cells = document.querySelectorAll('.square');
cells.forEach((square) => {
    square.addEventListener('mousemove', ()=>{
        square.style.backgroundColor = 'black';
    });
});
