/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
let x = 5

function addRect(x,y, size, fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, size, size);
}

function main(){

for (let i = 0; i < 9; i++) {
    x = x+10;
    console.log(x)
    addRect(x, 5, 10, 'green');
}

}

main();