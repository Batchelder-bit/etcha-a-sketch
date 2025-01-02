let parentDiv = document.querySelector('.container');

function createGrid (numberOfSquares = 16) {
    for (let i = 0; i < numberOfSquares; i++) {
            let newBox = document.createElement('div');
            newBox.classList.add('grid');
    }
}