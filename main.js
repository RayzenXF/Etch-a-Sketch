const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear-btn");
const gridSizeInput = document.querySelector("#grid-size");
const gridValueTxt = document.querySelector("#range-value");
const brushColor = document.querySelector("#brush-color");
let gridSize = 16;

let isMouseDown = false;

function createGrid(gridSize) {
    let containerSize = 400;
    let newSize = gridSize;
    let squareSize = containerSize / newSize;

    container.innerHTML = "";

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (let i = 0; i < newSize * newSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.backgroundColor = "white";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    };
};

createGrid(gridSize);

const squares = document.querySelectorAll(".square");

container.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isMouseDown = true;
});

window.addEventListener("mouseup", () => {
    isMouseDown = false;
});

squares.forEach(square => {
    square.addEventListener("mouseover", paint);
});

function paint(event) {
    if (!isMouseDown) return;
    event.target.style.backgroundColor = brushColor.value;
};

function clearGrid() {
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
};

clearButton.addEventListener("click", clearGrid);