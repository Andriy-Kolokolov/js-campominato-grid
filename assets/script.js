const eleGrid = document.querySelector(".grid");
const selectDifficulty = document.getElementById("select-difficulty");

const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', function () {
    // console.log(selectDifficulty.value)
    generateGrid(selectDifficulty.value);
});

function generateGrid(difficulty) {
    switch (difficulty) {
        case "Easy":
            generateCells(49);
            break;
        case "Medium":
            generateCells(81);
            break;
        case "Hard":
            generateCells(100);
            break;
    }
}

function generateCells(gridSize) {
    removeCells(eleGrid);
    eleGrid.setAttribute("style", `grid-template-columns: repeat(${Math.sqrt(gridSize)}, 1fr);`)
    for (let i = 0; i < gridSize; i++) {
        eleGrid.innerHTML += `<div class="cell" style="background-color: #ee456e">${i + 1}</div>`;
    }
}

function removeCells(eleGrid) {
    while (eleGrid.firstChild) {
        eleGrid.removeChild(eleGrid.lastChild);
    }
}