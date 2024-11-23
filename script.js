const CONTAINER_LENGTH = 800;
const container = document.querySelector("#container");
const header = document.querySelector(".header");
const resetButton = document.querySelector(".button");

resetButton.addEventListener("click", resetCanvas);

header.style.width = (CONTAINER_LENGTH + 10) + 'px';

let penOpacity = 0.1;
let canvasSize = 16;
let canvasArea;
let canvasLength;
let canvasSquares = [];

function drawCanvas() {
    canvasArea = canvasSize * canvasSize;
    canvasLength = CONTAINER_LENGTH / canvasSize;

    createGrid();
}

function createGrid() {
    for (let i = 1; i <= canvasArea; i++) {
        let newSquare = document.createElement("div");
        newSquare.setAttribute("class", "canvas");
        newSquare.style.height = canvasLength + 'px';
        newSquare.style.width = canvasLength + 'px';
        newSquare.style.opacity = penOpacity;
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = 'black';
            newSquare.style.opacity = parseFloat(newSquare.style.opacity) + parseFloat(penOpacity);
        });
        canvasSquares.push(newSquare);
    }

    for( let i = 0; i < canvasSquares.length; i++){
        container.appendChild(canvasSquares[i]);
    }
}

function resetCanvas () {
    canvasSize = prompt("Enter the amount of squares per side");
    if (canvasSize > 100) {
        alert (canvasSize + " is too large. Canvas has defaulted to 16.");
        canvasSize = 16;
    }

    for (let i = 0; i < canvasSquares.length; i++) {
        canvasSquares[i].remove();
    }

    canvasSquares = [];

    drawCanvas()
}

drawCanvas();

