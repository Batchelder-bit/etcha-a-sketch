console.log('I am working');

const container = document.querySelector('.container');

function createGrid (amountPerSide) {
    let gridCounter = 0;
    for (let i = 0; i < amountPerSide * amountPerSide; i++) {
            // console.log(gridCounter);
            let cubeCounter = i + 1;
            if(cubeCounter % amountPerSide == 0) {
                let newBox = document.createElement('div');
                newBox.classList.add('grid');
                container.appendChild(newBox);
                let endingDiv = document.createElement('div');
                endingDiv.classList.add('endingDiv');
                container.appendChild(endingDiv);
                console.log(i);
            } else {
                let newBox = document.createElement('div');
                newBox.classList.add('grid');
                container.appendChild(newBox);
            }
            // gridCounter++
    }
}

document.addEventListener('DOMContentLoaded', () => createGrid(24));