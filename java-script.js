console.log('I am working');

const container = document.querySelector('.container');

function createGrid (amountPerSide) {
    let gridCounter = 0;
    for (let i = 0; i < amountPerSide * amountPerSide; i++) {
            console.log(gridCounter);
            let newBox = document.createElement('div');
            newBox.textContent = '.';
            newBox.classList.add('grid');
            container.appendChild(newBox);
            gridCounter++
    }
}

document.addEventListener('DOMContentLoaded', () => createGrid(16));