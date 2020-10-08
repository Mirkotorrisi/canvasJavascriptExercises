let bool = false;
if (!bool) document.onmousemove = handleMouseMove;

const cont = document.getElementById("container");
const canv = document.getElementById("canv");
let squareH = 32;
let squareW = 32;
let lastPosition;
const totalX = 320;
const totalY = 480;
let ctx = canv.getContext("2d");

let squares = [];

const cols = totalX / squareW;
const rows = totalY / squareH;

let count = 0;

//creo i quadrati di controllo
createVirtualSquares();

function createVirtualSquares() {
    for (let index = 1; index <= rows * cols; index++) {
        squares.push({
            i: index,
            boolean: false,
        });
    }
}
//creo la foto di background nel canvas
make_base();

function make_base() {
    base_image = new Image();
    base_image.src = "base.jpeg";
    base_image.onload = function() {
        ctx.drawImage(base_image, 0, 0, totalX, totalY);
    };
}

//creo il cerchio che disegna
const circle = (position, radius, ctx) => {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius - 10, 0, Math.PI * 2, true);
    ctx.globalCompositeOperation = "source-out";
    ctx.filter = "blur(10px)";
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
};
//prendo la posizione del mouse e la proporziono al canvas
function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    (scaleX = canvas.width / rect.width), // relationship bitmap vs. element for X
    (scaleY = canvas.height / rect.height);
    if (!lastPosition) {
        lastPosition = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

function line(x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = x0 < x1 ? 1 : -1;
    var sy = y0 < y1 ? 1 : -1;
    var err = dx - dy;

    while (true) {
        if (x0 === x1 && y0 === y1) break;
        var e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
        let centre = {
            x: x0,
            y: y0,
        };
        circle(centre, squareW / 2, ctx);
    }
}
//funzione principale di brush
function handleMouseMove(e) {
    position = getMousePos(canv, e);
    //punto medio in mezzo
    line(lastPosition.x, lastPosition.y, position.x, position.y);

    lastPosition = position;
    for (const square of squares) {
        if (!square.boolean &&
            Math.floor(e.offsetX / squareW + (e.offsetY / squareH) * cols) == square.i
        ) {
            square.boolean = true;
            count++;
            console.log(count);
        }
    }
    if (count >= rows * cols * 0.8 && bool == false) {
        bool = true;
        cont.removeChild(canv);
        return;
    }
}