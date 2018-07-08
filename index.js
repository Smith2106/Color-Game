let colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDislplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // Change colors of squares
    squares.forEach((square, i) => square.style.backgroundColor = colors[i]);
    h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;

squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];

    square.addEventListener('click', (e) => {
        let clickedColor = e.target.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            console.log(e.target);
            e.target.style.backgroundColor = '#232323';
            console.log(e.target.style.backgroundColor);
            messageDisplay.textContent = 'Try Again';
        }
    });
});

const changeColors = color => {
    // Iterate through all squares
    squares.forEach(square => {
        // Change each color to match given color
        square.style.backgroundColor = color;
    })
};

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};

function generateRandomColors(num) {
    // Make an array
    const arr = [];
    // Repeat num times
    for (let i = 0; i < num; i++) {
        // Get random color and push into array
        arr.push(randomColor());
    }
    // Return the array
    return arr
}

function randomColor() {
    // Pick a red from 0 - 255
    const r = Math.floor(Math.random() * 256);
    // Pick a green from 0 - 255
    const g = Math.floor(Math.random() * 256);
    // Pick a blue from 0 - 255
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}