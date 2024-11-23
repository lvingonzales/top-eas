const CONTAINER_LENGTH = 800;
const container = document.querySelector("#container");


let canvasSize = 20;
let canvasArea;
let canvasLength;
let canvasSquares = [];

function drawCanvas() {
    canvasArea = canvasSize * canvasSize;
    canvasLength = CONTAINER_LENGTH / canvasSize;

    for (let i = 1; i <= canvasArea; i++){
        let newSquare = document.createElement("div");
            newSquare.setAttribute("class", "canvas");
            newSquare.style.height = canvasLength + 'px';
            newSquare.style.width = canvasLength + 'px';
            newSquare.addEventListener("mouseover", () => {
                newSquare.style.backgroundColor = 'blue';
            });
            container.appendChild(newSquare);
            canvasSquares.push(newSquare);
    }
}

drawCanvas();

