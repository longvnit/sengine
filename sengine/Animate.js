class Animate {
	
	constructor(display) {
		this.display = display;
		this.context = this.display.getContext();
	}

	onStart(onStart) {
		onStart();
	}

	onLoop(onLoop) {
		onLoop();
	}

	onComplete(onComplete) {
		onComplete();
	}
}

module.exports = Animate;