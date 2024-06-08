const changeSizeButton = document.getElementsByClassName('changeSize')[0];
const container = document.getElementById('container')
let gridSize = 16;
let blockSize = 800/16;
function hoverEffect(event) {
    event.target.style.backgroundColor = `rgb(${parseInt(Math.random()*256)}, ${parseInt(Math.random()*256)}, ${parseInt(Math.random()*256)})`;
    event.target.style.border = '0px';
}
for(let i = 0; i<16*16; i++){
    const gridBlock = document.createElement('div');
    gridBlock.classList.add('grid-block');
    container.append(gridBlock);
    gridBlock.style.width = `${blockSize}px`;
    gridBlock.style.height = `${blockSize}px`;
    gridBlock.addEventListener('mouseover', hoverEffect);
}
changeSizeButton.addEventListener('click', () => {
    container.innerHTML = '';
    let userInput = prompt('Enter New Value');
    let newSize = parseInt(userInput);
    if(newSize <= 0 || typeof newSize !== "number" || userInput == null || newSize > 100) {newSize = 16; alert("Invalid");}
    blockSize = 800/newSize;
    for(let i = 0; i<newSize*newSize; i++){
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.style.width = `${blockSize}px`;
        gridBlock.style.height = `${blockSize}px`;
        container.append(gridBlock);
        gridBlock.addEventListener('mouseover', hoverEffect);
    }
})

