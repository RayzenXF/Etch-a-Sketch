const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear-btn")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");   
    square.classList.add("square");
    container.appendChild(square);
};

const squares = document.querySelectorAll(".square");

const brushColor = document.querySelector("#brush-color");
let color = "black";

const gridSize = document.querySelector("#grid-size");
const rangeValue = document.querySelector("#range-value");

rangeValue.textContent = `${gridSize.value} x ${gridSize.value}`;

gridSize.addEventListener("input", () => {
    rangeValue.textContent = `${gridSize.value} x ${gridSize.value}`;
    changeGridSize();
});

squares.forEach(squares => {
    squares.addEventListener("mouseover", () => {
        color = brushColor.value;
        // console.log(color); debug
        squares.style.backgroundColor = color;
    });
});

squares.forEach(squares => {
    clearButton.addEventListener("click", () => {
        squares.style.backgroundColor = "white";
    });
});
