const colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];

const squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.addEventListener('click', (e) => {
        let clickedColor = e.target.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert('Correct!');
        }
        else {
            e.target.style.backgroundColor = '#23232';
            messageDisplay.textContent = 'Try Again';
        }
    });
});