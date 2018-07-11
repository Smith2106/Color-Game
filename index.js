let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    // Mode buttons event listeners
    modeButtons.forEach(mode => mode.addEventListener('click', e => {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        e.target.classList.add('selected');
        numSquares = e.target.textContent === 'Easy' ? 3 : 6;
        reset();
    }));
}

function setUpSquares() {
    // Add click listeners to squares
    squares.forEach((square, i) => {
        // Grab color of clicked square
        square.style.backgroundColor = colors[i];
        // Compare color to picked color
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
}



function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDislplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    // Change colors of squares
    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.display = 'block';
            square.style.backgroundColor = colors[i];
        }
        else {
            square.style.display = 'none';
        }
    });

    h1.style.backgroundColor = 'steelblue';
};

resetButton.addEventListener('click', (e) => {
   reset();
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