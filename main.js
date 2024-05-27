// function applyStyles() {
//     let colorInput = document.getElementById('colorInput');
//     let widthInput = document.getElementById('widthInput');
//     let heightInput = document.getElementById('heightInput');
//     let customBox = document.getElementById('customBox');

//     let color = colorInput.value;
//     let width = widthInput.value;
//     let height = heightInput.value;

//     if (color) {
//         customBox.style.backgroundColor = color;
//     }
//     if (width) {
//         customBox.style.width = `${width}px`;
//     }
//     if (height) {
//         customBox.style.height = `${height}px`;
//     }
// }

function applyStyles() {
    let colorInput = document.getElementById('color');
    let widthInput = document.getElementById('width');
    let heightInput = document.getElementById('height');
    let customBox = document.getElementById('customBox');

    const color = colorInput.value;
    const width = widthInput.value;
    const height = heightInput.value;

    if (color) {
        customBox.style.backgroundColor = color;
    }
    if (width) {
        customBox.style.width = `${width}`;
    }
    if (height) {
        customBox.style.height = `${height}`;
    }
}