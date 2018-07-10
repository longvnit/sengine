class Display {


	constructor() {

	}

	init(displayId, width, height) {
		this.setDisplayId(displayId);
		this.setWidth(width);
		this.setHeight(height);

		this.display = document.getElementById(this.getDisplayId());
		this.display.width = this.getWidth();
		this.display.height = this.getHeight();
		this.context = this.display.getContext('2d');
		

		// init fps
		this.isPlaying = true;
		this.isDebug = false;

		this.raf = window.requestAnimationFrame ||
    		window.mozRequestAnimationFrame ||
    		window.webkitRequestAnimationFrame ||
    		window.msRequestAnimationFrame;
    
		window.requestAnimationFrame = this.raf;

		if(this.FPS === undefined) {
			this.FPS = 24;
		}

		this.frameInterval = 1000 / this.FPS;
		this.lastCallFrame = Date.now();
		this.currentFPS = 0;



		return this;
	}

	render() {
			// console.log(obj);
			// console.log('asdf');
		if(this.isPlaying == true) {
			requestAnimationFrame(this.render.bind(this));
			//console.log(this);
			//obj.render(obj);

			let now = Date.now();
			let delta = now - this.lastCallFrame;
			if(delta > this.frameInterval) {
				this.lastCallFrame = now - (delta % this.frameInterval);
				this.currentFPS = 1000 / delta;

				// clear all
				this.clear();	

				// call render
				this.fnRender();

				if(this.isDebug == true) {
					this.debug();
				}
			}
		}
	}

	clear() {
		this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
	}

	setDisplayId(displayId) {
		this.displayId = displayId;
	}

	getDisplayId() {
		return this.displayId;
	}

	setWidth(width) {
		this.width = width;
	}

	getWidth() {
		return this.width;
	}

	setHeight(height) {
		this.height = height;
	}

	getHeight() {
		return this.height;
	}

	getContext() {
		return this.context;
	}

	getDisplay() {
		return this.display;
	}

	// add fps
	setFPS(fps) {
		this.FPS = fps;
	}

	getFPS() {
		return this.currentFPS;
	}

	setRender(render) {
		this.fnRender = render;
	}

	setPlay(isPlaying) {
		this.isPlaying = isPlaying;
	}

	setDebug(debug) {
		this.isDebug = debug;
	}

	debug() {
		console.log('FPS: ' + this.currentFPS);
	}
}

module.exports = Display;