const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear-btn");
const gridSizeInput = document.querySelector("#grid-size");
const gridValueTxt = document.querySelector("#range-value");
const brushColor = document.querySelector("#brush-color");

function createGrid() {
    let containerSize = 400;
    let gridSize = 16;
    let squareSize = containerSize / gridSize;

    container.innerHTML = "";

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.backgroundColor = "white";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    };
};

createGrid();

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", paint);
});

function paint(event) {
    event.target.style.backgroundColor = brushColor.value;
};