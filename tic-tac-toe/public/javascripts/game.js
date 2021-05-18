window.addEventListener('DOMContentLoaded', ()=>{

});

let divSquares = document.getElementsByTagName('div');
let currentPlayer = 0;

document.addEventListener('click', (e) => {
    let currentSquare = e.target;
    if(e.target.className === 'square' && currentPlayer === 0) {
        currentSquare.textContent = 'X';
        currentPlayer ++;
    }else if (e.target.className === 'square') {
        currentSquare.textContent = 'O';
        currentPlayer = 0;
    }
});
