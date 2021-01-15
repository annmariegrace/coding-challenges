window.addEventListener('DOMContentLoaded', ()=>{

});

let divSquares = document.getElementsByTagName('div');
let currentPlayer = 0;

document.addEventListener('click', (e) => {
    let currentSquare = e.target;
    if(e.target.className === 'square' && currentPlayer === 0) {
        currentSquare.innerHTML = 'X';
        currentPlayer ++;
    }else {
        currentSquare.innerHTML = 'O';
        currentPlayer = 0;
    }
});
