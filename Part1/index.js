console.log('hello world')
let board = [];

function play(clickedId){
    let clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player');

    if(playerSpan.innerText === "X"){
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedId] = 'X';
    } else{
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedId] = 'O';
    }

    let topRight = board[0];
    let topCenter = board[1];
    let topLeft = board[2];
    let middleRight = board[3];
    let middleCenter = board[4];
    let middleLeft = board[5];
    let bottomRight = board[6];
    let bottomCenter = board[7];
    let bottomLeft = board[8];

    if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert(`${topLeft} is the winner`);
        return;
    }
    else if(middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
        alert(`${middleLeft} is the winner`)
        return
    }
    else if(bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
        alert(`${bottomLeft} is the winner`)
        return
    }
    else if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the winner`)
        return
    }
    else if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner`)
        return
    }
    else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
        return
    }
    else if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${topRight} is the winner`)
        return
    }
    else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner`)
        return
    }

    let boardFull = true;
    for(var i = 0; i <=8; i++){
        if(board[i] === undefined){
            boardFull = false;
        }
    }
    if(boardFull === true){
        alert("CAT's game, there is no winner")
    }
}