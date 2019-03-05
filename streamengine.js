//Author: Edward Mortimer 
//This is the "engine" behind the webpage for the DJ battle Stream
//It allows a user to select between 2 streams 
//It also tracks the amount of time the user spends listening to each stream

if (window.addEventListener) window.addEventListener('load', onLoad, false);

function onLoad() {

	var stream1;
	var stream2;
	//var thatTime;

	document.getElementById("play1").addEventListener("click", function(){playStream(stream1,stream2)});
	document.getElementById("play2").addEventListener("click", function(){playStream(stream2,stream1)});
	document.getElementById("pause1").addEventListener("click", function(){pauseStream(stream1)});
	document.getElementById("pause2").addEventListener("click", function(){pauseStream(stream2)});

	initializer = function(){
		stream1 = new stream(1,"streamOne");
		stream2 = new stream(2,"streamTwo");
		thatTime = Date.now();
		mainLoop();
	}

	playStream = function(s, p){
		//send 'GET' to stream s
		console.log("playing " +  s.getStreamURL());
		s.play();
		//pause other stream
		pauseStream(p);
	}

	pauseStream = function(s){
		//send 'GET' to stream s
		console.log("pausing " + s.getStreamURL());
		s.pause();
	}

	mainLoop = function() {
		//thatTime = Date.now();
		while(stream1.isPaused()==false){
			//thisTime=Date.now();
			//score increments every 1/10 of 1 second
			//if(thisTime-thatTime>=1000){
				stream1.incrementScore();
				console.log("Stream1: " + stream1.streamScore);
				//thatTime = thisTime;
			//}
		}
		//thatTime = Date.now()
		while(stream2.isPaused()==false){
			//thisTime=Date.now();
			//score increments every 1/10 of 1 second
			//if(thisTime-thatTime>=1000){
				stream2.incrementScore();
				console.log("Stream2: " + stream2.streamScore);
				//thatTime = thisTime;
			//}
		}
		
		setTimeout(mainLoop, 1000);//loop runs every second
	}	

	initializer();
}