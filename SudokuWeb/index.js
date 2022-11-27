var document = "index.html"




$("#Hard").click(function () {
    board(50);
})


$("#Normal").click(function () {
    board(35);

})

$("#Easy").click(function () {
    board(20);
})

$("#Check").click(function () {
    checkBoard();
})





function board(dificultyNumber) {
    $("#output").text("");
    var gameBoard = createboard(dificultyNumber);
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[0].length; j++) {
            var num = gameBoard[i][j];
            
            if (num != 0) {
                $("#cell" + i + j).text(num.toString());
                $("#cell" + i + j).attr('contenteditable', 'false');


            }
            else {
                $("#cell" + i + j).text(" ");
                $("#cell" + i + j).attr('contenteditable', 'true');
            }
        }
    }
}

function createboard(dificultyNumber) {
    var gameBoard = [];
    for (let num = 0; num < 9; num++) {
        gameBoard[num] = [];
    }
    for (let temp = 0; temp < 9; temp++) {

        for (let temp2 = 0; temp2 < 9; temp2++) {
            var num = Math.floor(Math.random() * dificultyNumber + 1);
            gameBoard[temp][temp2] = 0;
            if (num < 10 && check(gameBoard, temp, temp2, num) == true) {
                gameBoard[temp][temp2] = num;
            }
            
        }
    }
    return gameBoard;
}
function check(gameBoard, row, col, num) {
    for ( temp = 0; temp < gameBoard.length; temp++) {
        if (gameBoard[row][temp] == num) {
            return false;
        }
        if (gameBoard[temp][col] == num) {
            return false;
        }
    }
    for (var temp2 = Math.floor(row / 3) * 3; temp2 < Math.floor(row / 3) * 3 + 3; temp2++) {
        for (var temp3 = Math.floor(col / 3) * 3; temp3 < Math.floor(col / 3) * 3 + 3 ; temp3++) {

        
            if (gameBoard[temp2][temp3] == num) {
                return false;
            }
        }
    }
    return true;
}
function checkFinal(gameBoard, row, col) {
    var instances = 0;
    var num = gameBoard[row][col];
    for (temp = 0; temp < gameBoard.length; temp++) {
        if (gameBoard[row][temp] == num) {
            instances++;
        }
        if (gameBoard[temp][col] == num) {
            instances++;
        }
    }
    for (var temp2 = Math.floor(row / 3) * 3; temp2 < Math.floor(row / 3) * 3 + 3; temp2++) {
        for (var temp3 = Math.floor(col / 3) * 3; temp3 < Math.floor(col / 3) * 3 + 3; temp3++) {
            if (gameBoard[temp2][temp3] == undefined) {
                return false;
            }
        }
    }
    if (instances == 1) {
        return true;
    }
    else {
        return false;
    }
   
}
function checkBoard() {
    var gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < 9; j++) {
            gameBoard[i][j] = $("#cell" +i+j).text();
            
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (checkFinal(gameBoard, i, j) == false) {
                $("#output").text("Incorrect");
                $("#output").css("color", "red");

                var audio = new Audio("sounds/incorrect.mp3");
                

                audio.play();

                return;
            }
        }
    }

    $("#output").text("Correct");
    var audio = new Audio("sounds/correct.mp3");
    audio.play(CorrectMp3);

    $("#output").css("color", "green");

}



