
//svg connection                                                               
var restart_btn = document.getElementById("restart_btn");

var intervalID;
var radius = 0;
var playing = false;
var time = 0;
var score = 0;
var bubble = document.getElementById("circle");
var scoreDisplay = document.getElementById("score");
var timeDisplay = document.getElementById("timer");
var gameOver = document.getElementById("gameOver");

var tickTimer = function(){
    if (time < 60){
	time+=1;
    } else{
	displayScoreScreen();
    }
    timeDisplay.innerHTML = "Time Left: "+ (60-time);

};

//Probably need to do something more than a console log
var displayScoreScreen = function(){
    gameOver.innerHTML = "Game Over! Click restart :) </h2><h2> Score: " +score;

    console.log("game over");
};

//Click needs to employ hit detection
var play = function(e){
    console.log("clicked");
//    if(e.offsetX < //

    //e.preventDefault();
    if (onBubble(e.offsetX, e.offsetY) && time < 60){
	
	if(!playing){
	    playing = true;
	    intervalID = setInterval(tickTimer,1000);
	};
	moveBubble();
	score+=1;
	//update score display
	console.log(score);
	scoreDisplay.innerHTML = "Score: "+ score;
    }    
};

var moveBubble = function(){
    bubble.setAttribute("cx",Math.floor((Math.random() * 499) + 51));
    bubble.setAttribute("cy",Math.floor((Math.random() * 499) + 51));
    bubble.setAttribute("r", Math.floor((Math.random() * 30) + 21));
    console.log("bubble moved");
};

var onBubble = function(mouseX, mouseY){
    var x = bubble.getAttribute("cx");
    var y = bubble.getAttribute("cy");
    var r = bubble.getAttribute("r");
    
    var d = Math.pow(Math.pow(mouseX-x, 2) + Math.pow(mouseY-y,2), .5);

    if (d <= r){
	return true; 
    }
    return false;
};

var reset = function(){
    playing = false;
    time = 0;
    score = 0;
    clearInterval(intervalID);
    bubble.setAttribute("cx",300);
    bubble.setAttribute("cy",300);
    bubble.setAttribute("r", 50);
    timeDisplay.innerHTML = "Time Left: "+ (60-time);
    scoreDisplay.innerHTML = "Score: "+ score;
    gameOver.innerHTML = "";
    //console.log("playing: " + playing);
    //console.log("time: " + time);
    //console.log("score: " + score);

};

//move bubble
//timer
//scoreboard/end screen display

//window.setInterval(moveBubble(bubble), 500)

//listen for mouse click
//not working
canvas = document.getElementById("vimage");
restart_btn.addEventListener('click', reset);
canvas.addEventListener('click', play);
