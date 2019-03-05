//Author: Edward Mortimer 
//this is the stream class  
//it is a JS object class I made so streamengine would look cleaner

var stream = (function(){
	var streamID;
	var streamURL;
	var streamScore;
	var play;
	var pause;

	//constructor
	function stream(idIn, urlIn){
		this.streamID = idIn;
		this.streamURL = urlIn;
		this.streamScore = 0;
		//initializes to not playing OR paused
		this.playing = false;
		this.paused = false;
	}
	//access and mutate
	stream.prototype.setStreamID = function (idIn){this.streamID = idIn;}
	stream.prototype.getStreamID = function (){return this.streamID;}

	stream.prototype.setStreamURL = function (urlIn){this.streamURL = urlIn;}
	stream.prototype.getStreamURL = function (){return this.streamURL;}

	stream.prototype.incrementScore = function(){this.streamScore++;}
	stream.prototype.getScore = function(){return this.streamScore;}

	stream.prototype.play = function(){this.playing = true; this.paused = false;}
	stream.prototype.pause = function(){this.paused = true; this.playing = false;}

	stream.prototype.isPaused = function(){return this.paused;}

	return stream;	
})();
