var clock = {
	sessionHolder: 0,
	breakHolder: 0,
	timer: 0,
	sessionTime: 25,
	milli: 60,
	breakTime: 5,
	sessionH1: document.getElementById("session"),
	sessionP: document.getElementById("sessionTime"),
	breakP: document.getElementById("breakTime"),
	clock: document.getElementById("clock"),
	h1: document.getElementById("title"),
	button: document.getElementById("start"),

	start: function(){
		this.sessionHolder = this.sessionTime;
		this.breakHolder = this.breakTime;
		this.button.innerHTML = "<button onclick='clock.pause()'>Pause</button>"
		this.clock.className = "work";
		this.h1.innerHTML = "Work";
		this.sessionTime -=1;
		this.timer = setInterval(this.setSession, 1000);
		
	},

	stop: function(){
		
		this.button.innerHTML = "<button onclick='clock.pause()'>Pause</button>"
		this.clock.className = "break";
		this.h1.innerHTML = "Break";
		//this.sessionTime = this.breakTime;
		//clock.breakTime -=1;
		this.timer = setInterval(this.setBreak, 1000);
		 
		
		
			/*if(this.sessionTime === 0 && this.milli ===0 )
				{
					this.reset();
				}*/

	},

	pause: function(){
		
		
		if(this.clock.className === "work"){

			this.button.innerHTML = "<button onclick='clock.start()'>Start</button>"
		 	clearInterval(this.timer);
		 	this.sessionTime +=1 ;
		 }
		 else {
		 	this.button.innerHTML = "<button onclick='clock.stop()'>Start</button>"
		 	clearInterval(this.timer);
		 	
		 }

	},


	setSession: function(){
		//debugger;
		if(clock.milli === 0 && clock.sessionTime !== 0){
			
			clock.milli = 10;
			clock.sessionTime -= 1;

		}
		 if(clock.sessionTime === 0 && clock.milli === 0 ){
	

			clearInterval(clock.timer);
			//clock.sessionTime = clock.breakTime;
			
			clock.stop();



			return;
			
			
		}
		
		clock.milli  -= 1;
		clock.sessionH1.innerHTML =  clock.sessionTime + ":" + clock.milli;
		
	
		
	},

	setBreak: function(){
		debugger;
		if(clock.milli === 0 && clock.breakTime !== 0){
			
			clock.milli = 60;
			clock.breakTime -= 1;

		}
		 if(clock.breakTime === 0 && clock.milli === 0 ){
	

			clearInterval(clock.timer);
			//clock.sessionTime = clock.breakTime;
			clock.reset();



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
	
		if(this.sessionTime >= 2){
			this.sessionTime -= 1
		}
		this.sessionH1.innerHTML =  this.sessionTime;
		this.sessionP.innerHTML =  this.sessionTime;

	},

	lowerBreak: function() {
		
		if(this.breakTime >=2 ){
			this.breakTime -= 1
		}
		
		//this.sessionH1.innerHTML =  clock.sessionTime;
		this.breakP.innerHTML =  this.breakTime;

	},

	raiseBreak: function() {
		
		this.breakTime += 1
		//this.sessionH1.innerHTML =  clock.sessionTime;
		this.breakP.innerHTML =  this.breakTime;

	},

	reset: function() {
		clearInterval(this.timer);
		
		
		this.sessionTime = this.sessionHolder;
		this.breakTime = this.breakHolder;
		this.milli = 60;
		this.start();

	}



};



