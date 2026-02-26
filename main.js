const container = document.querySelector("#squares-container");
const clearButton = document.querySelector("#clear-btn");
const gridSizeInput = document.querySelector("#grid-size");
const gridValueTxt = document.querySelector("#range-value");
const brushColor = document.querySelector("#brush-color");
const paintButton = document.querySelector("#paint-btn");
const eraserButton = document.querySelector("#eraser-btn");
const rainbowButton = document.querySelector("#rainbow-btn");

paintButton.classList.add("active");

let mode = "paint";
let gridSize = 16;
let isMouseDown = false;

function createGrid(gridSize) {
    let containerSize = 500;
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

function switchToEraser() {
    paintButton.classList.remove("active");
    rainbowButton.classList.remove("active");
    eraserButton.classList.add("active");
    mode = "eraser";
};

function switchToPaint() {
    eraserButton.classList.remove("active");
    rainbowButton.classList.remove("active");
    paintButton.classList.add("active");
    mode = "paint";    
};

function switchToRainbow() {
    eraserButton.classList.remove("active");
    paintButton.classList.remove("active");
    rainbowButton.classList.add("active");
    mode = "rainbow";    
};

paintButton.addEventListener("click", switchToPaint);

eraserButton.addEventListener("click", switchToEraser);

rainbowButton.addEventListener("click", switchToRainbow);

function rainbow() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `${r}, ${g}, ${b}`;

    return rgb;
}

function paint(event) {
    if (!isMouseDown) return;
    if (mode === "paint") {
        event.target.style.backgroundColor = brushColor.value;
    } else if (mode === "eraser") {
        event.target.style.backgroundColor = "white";
    } else if (mode === "rainbow") {
        const rgbPaint = rainbow();
        // console.log(rgbPaint); // debug
        event.target.style.backgroundColor = `rgb(${rgbPaint})`;
    }
};

function clearGrid() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
};

function changeGridSize() {
    let size = gridSizeInput.value; 
    createGrid(size);
};

gridValueTxt.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;

gridSizeInput.addEventListener("input", (event) => {
    event.preventDefault();
    gridValueTxt.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    changeGridSize();
});

const squares = document.querySelectorAll(".square");

container.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isMouseDown = true;
    paint(event);
});

window.addEventListener("mouseup", () => {
    isMouseDown = false;
});

container.addEventListener("mouseover", paint);

clearButton.addEventListener("click", clearGrid);