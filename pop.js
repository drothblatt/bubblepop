//svg connection                                                               
var pic = document.getElementById("vimage");


var intervalID;
var radius = 0;
var playing = false;
var time=0;
var score = 0;
var bubble = document.getElementById("circle");

var tickTimer = function(){
    time+=1;
    if( time >= 60){
	displayScoreScreen();
    }
}

//Probably need to do something more than a console log
var displayScoreScreen = function(){
    console.log("game over");
}

//Click needs to employ hit detection
var click = function(e){
    console.log("clicked");
    //e.preventDefault();
    if(!playing){
	playing = true;
	setInterval(tickTimer,1000);
	score +=1;
	moveBubble()
	//add 1 to score
    }else{
	moveBubble();
	score+=1;
    }
}

var moveBubble = function(){
    bubble.setAttribute("cx",Math.floor((Math.random() * 999) + 1));
    bubble.setAttribute("cy",Math.floor((Math.random() * 499) + 1));
    console.log("bubble moved");
}

//move bubble
//timer
//scoreboard/end screen display

//window.setInterval(moveBubble(bubble), 500)

//listen for mouse click
//not working
canvas = document.getElementById("vimage");
canvas.addEventListener("click",click());
