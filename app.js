var clock = {
	
	timer: 0,
	sessionTime: 25,
	milli: 60,
	breakTime: 5,
	sessionH1: document.getElementById("session"),
	sessionP: document.getElementById("sessionTime"),
	breakP: document.getElementById("breakTime"),
	clock: document.getElementById("clock"),
	h1: document.getElementById("title"),

	start: function(){
		this.clock.className = "work";
		this.h1.innerHTML = "Work";
		this.sessionTime -=1;
		this.timer = setInterval(this.setSession, 1000);
		
	},

	stop: function(){
		this.clock.className = "break";
		this.h1.innerHTML = "Break";
		this.timer = setInterval(this.setBreak, 1000);



	},

	setSession: function(){
		if(clock.milli === 0 && clock.sessionTime !== 0){
			
			clock.milli = 60;
			clock.sessionTime -= 1;
		}
		 if(clock.sessionTime === 0 && clock.milli === 0 ){

			clearInterval(clock.timer);
			clock.stop();
			return;
		}
		
		clock.milli  -= 1;
		clock.sessionH1.innerHTML =  clock.sessionTime + ":" + clock.milli;
		
	},

	setBreak: function(){
		if(clock.milli === 0 && clock.breakTime !== 0){
			
			clock.milli = 60;
			clock.breakTime -= 1;
		}
		 if(clock.sessionTime === 0 && clock.milli === 0 ){

			clearInterval(clock.timer);
			
			return;
		}
		
		clock.milli  -= 1;
		clock.sessionH1.innerHTML =  clock.breakTime + ":" + clock.milli;
		
	},

	raiseSession: function() {
		this.sessionTime += 1
		this.sessionH1.innerHTML =  this.sessionTime;
		this.sessionP.innerHTML =  this.sessionTime;
	},

	lowerSession: function() {
		this.sessionTime -= 1
		this.sessionH1.innerHTML =  this.sessionTime;
		this.sessionP.innerHTML =  this.sessionTime;

	},

	lowerBreak: function() {
		this.breakTime -= 1
		//this.sessionH1.innerHTML =  clock.sessionTime;
		this.breakP.innerHTML =  this.breakTime;

	},

	raiseBreak: function() {
		this.breakTime += 1
		//this.sessionH1.innerHTML =  clock.sessionTime;
		this.breakP.innerHTML =  this.breakTime;

	}

};



