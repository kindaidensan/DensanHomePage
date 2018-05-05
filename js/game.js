var canvas = document.getElementById("webGame");
var ctx = canvas.getContext("2d");
var ballRadius = 6;
var xBoll = canvas.width/2;
var yBoll = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 6;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = paddleHeight + 10;
var rightPressed = false;
var leftPressed = false;

/**
 * ここの２つはkeyが押されたとき,離されたときのイベント発火を検知するためのもの.
 */
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/**
 * バーの左右判定.これはkey押されたとき用.
 * @param  e：key入力情報
 */
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

/**
 * バー左右判定.これはkeyが離されたたき.
 * @param e: key入力情報.
 */
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

/**
 * バーの描画.
 */
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleY,  paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

/**
 * ボールの描画.
 */
function drawBall() {
    ctx.beginPath();
    ctx.arc(xBoll, yBoll, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

/**
 * 全体の描画(バー,ボール,表示領域)
 * また,ボールの跳ね返りについても司る.
 */
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(xBoll + dx > canvas.width-ballRadius || xBoll + dx < ballRadius) {
        dx = -dx;
    }
    
    // // バートの当たり判定作りたかったけど地面にぶっ刺さってerror大量に掃くから断念。
    // // 後で調べる
    // if(yBoll + dy + paddleY< ballRadius) {
    //     dy = -dy;
    // }else if(yBoll + dy > canvas.height - ballRadius){
    //    if(xBoll > paddleX && x < paddleX + paddleWidth){
    //        dy = -dy;
    //    }
    //    else{
    //         alert("GAME OVER");
    //         document.location.reload();
    //    }
    // }

    if(yBoll + dy > canvas.height-ballRadius || yBoll + dy < ballRadius) {
        dy = -dy;
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    xBoll += dx;
    yBoll += dy;
}

/**
 * main文みたいなもん(多分)
 */
setInterval(draw, 10);