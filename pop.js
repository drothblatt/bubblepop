//svg connection                                                               
var pic = document.getElementById("vimage");


var intervalID;
var radius = 0;
var playing = false;
var time=0;
var score = 0;
var bubble = document.getElementById("circle");
var scoreDisplay = document.getElementById("score");
var timeDisplay = document.getElementById("timer");

var tickTimer = function(){
    time+=1;
    timeDisplay.innerHTML = "Time Left: "+ (60-time);
    if( time >= 60){
	displayScoreScreen();
    }
};

//Probably need to do something more than a console log
var displayScoreScreen = function(){
    


    console.log("game over");
};

//Click needs to employ hit detection
var play = function(e){
    console.log("clicked");
//    if(e.offsetX < //

    //e.preventDefault();
    if (onBubble(e.offsetX, e.offsetY)){
	
	if(!playing){
	    playing = true;
	    setInterval(tickTimer,1000);
	};
	moveBubble();
	score+=1;
	//update score display
	scoreDisplay.innerHTML = "Score: "+score;
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

//move bubble
//timer
//scoreboard/end screen display

//window.setInterval(moveBubble(bubble), 500)

//listen for mouse click
//not working
canvas = document.getElementById("vimage");
canvas.addEventListener('click',play);
